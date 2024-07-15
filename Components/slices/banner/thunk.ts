import { UPLOAD_BANNER, baseURL } from "Components/helpers/url_helper";
import { api_is_error, api_is_loading } from "./reducer";
import axios from "axios";
import Swal from "sweetalert2";

export const Uploadbanner = (values: any) => async (dispatch: any) => {
  try {
    const form = new FormData();
    values.images.map((item: any) => form.append("upload", item));
    const options = {
      method: "POST",
      url: `${baseURL}${UPLOAD_BANNER}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: form,
    };
    dispatch(api_is_loading(true));
    const apifetch = await axios.request(options);
    dispatch(api_is_loading(true));
    const response: any = await apifetch;
    dispatch(api_is_loading(false));
    if (response.baseResponse.status === 1) {
      Swal.fire({
        title: "Good job!",
        text: response.baseResponse.message,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "error",
        text: response.baseResponse.message,
        icon: "error",
      });
      dispatch(api_is_error(response));
    }
    return response;
  } catch (error: any) {
    console.log(error);
    Swal.fire({
      title: "error!",
      text: error,
      icon: "error",
    });
    dispatch(api_is_error(error));
  }
};
