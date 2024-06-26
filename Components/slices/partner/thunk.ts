import {
  ADD_NEW_PARTNER,
  GET_ALL_PARTNER,
  baseURL,
} from "Components/helpers/url_helper";
import axios from "axios";
import Swal from "sweetalert2";
import { api_is_success } from "./reducer";

export const AddnewPartner = (values: any) => async (dispatch: any) => {
  try {
    const form = new FormData();

    form.append("name", values.name);
    form.append("document", values.document[0]);
    form.append("email", values.email);
    form.append("contact", values.contact);
    form.append("address", values.address);
    form.append("city", values.city);
    form.append("hub", values.hub);

    const data = {
      method: "POST",
      url: `${baseURL}${ADD_NEW_PARTNER}`,
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const fetchapi = await axios.request(data);
    const resp: any = await fetchapi;
    const { baseResponse, response } = resp;
    if (baseResponse.status === 1) {
      Swal.fire({
        title: "Submittion success",
        text: baseResponse.message,
        icon: "success",
      });
    }
  } catch (error: any) {
    Swal.fire({
      title: "Submittion error",
      text: error,
      icon: "error",
    });
  }
};

export const GetAllPartner = () => async (dispatch: any) => {
  try {
    const options = {
      url: `${baseURL}${GET_ALL_PARTNER}`,
      method: "GET",
    };
    const fetchapi = await axios.request(options);
    const resp: any = await fetchapi;
    const { response, baseResponse } = resp;
    if (baseResponse.status === 1) {
      dispatch(api_is_success(response));
    }
  } catch (error) {
    console.log("error", error);
  }
};
