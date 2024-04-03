import {
  CREATE_MEMBERSHIP,
  CREATE_NEW_MEMBERSHIP,
  baseURL,
} from "Components/helpers/url_helper";
import axios from "axios";
import Swal from "sweetalert2";

export const CreateMembership = (values: any) => async (dispatch: any) => {
  try {
    const options = {
      method: "POST",
      url: `${baseURL}${CREATE_NEW_MEMBERSHIP}`,
      data: { membershipDetails: values },
    };

    const apifetch = await axios.request(options);
    const resp: any = await apifetch;
    console.log("resp:", resp);
    if (resp.baseResponse.status === 1) {
      Swal.fire({
        title: "Good job!",
        text: resp.baseResponse.message,
        icon: "success",
      });
    }
    return resp;
  } catch (error: any) {
    Swal.fire({
      title: "error!",
      text: error,
      icon: "error",
    });
  }
};
