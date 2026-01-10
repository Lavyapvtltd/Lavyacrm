import Swal from "sweetalert2";
import {
  GET_TRIAL,
  baseURL,
  NEW_TRIAL,
  UPDATE_TRIAL,
  DELETE_TRIAL,
} from "Components/helpers/url_helper";
import axios from "axios";
import { api_is_error, api_is_loading, api_is_success } from "./reducer";

export const GetAllTrials = () => async (dispatch: any) => {
  try {
    const options = {
      method: "GET",
      url: `${baseURL}${GET_TRIAL}`,
    };
    const apifetch = await axios.request(options);
    const response: any = await apifetch;
console.log(response)
    dispatch(api_is_success(response));
    return response;
  } catch (error) {
    dispatch(api_is_error(error));

    return error;
  }
};

export const PostTrial = (FormData: any) => async (dispatch: any) => {
  try {
  

    const options = {
      method: "POST",
      url: `${baseURL}${NEW_TRIAL}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: FormData,
    };
    dispatch(api_is_loading(true));

    const apifetch = await axios.request(options);
    dispatch(api_is_loading(true));
    const response: any = await apifetch;
    
    dispatch(api_is_loading(false));
    if (response.baseResponse.status === 1) {
    //   dispatch(SingleProductImage(values,response.response._id));
      /* Add SweetAlert Success */
      Swal.fire({
        title: "Good job!",
        text: response.message,
        icon: "success",
      }).then(() => {
        dispatch(GetAllTrials());
      });
    } else {
      /* Add SweetAlert Eror */
      Swal.fire({
        title: "Error !!!",
        text: response.message,
        icon: "error",
      });
    }
    return response;
  } catch (error: any) {
    Swal.fire({
      title: "Error!",
      text: error,
      icon: "error",
    });
    dispatch(api_is_error(error));
  }
};


export const updateTrialPut =
  (id:any, values : any) => async (dispatch: any) => {
    try {
      const form = new FormData();
      form.append("product_id", values.product_id);
      form.append("price", values.price);
      form.append("days", values.days);
      form.append("status", values.status);

      if (values.image) {
        form.append("image", values.image);
      }

      const options = {
        method: "PUT",
        url: `${baseURL}${UPDATE_TRIAL}/${id}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: form,
      };

      dispatch(api_is_loading(true));
      const resp = await axios.request(options);
      dispatch(api_is_loading(false));

      if (resp.data.baseResponse.status === 1) {
        Swal.fire({
          title: "Updated!",
          text: resp.data.baseResponse.message,
          icon: "success",
        }).then(() => {
          dispatch(GetAllTrials());
        });
      } else {
        Swal.fire("Error!", resp.data.baseResponse.message, "error");
      }
    } catch (error) {
      dispatch(api_is_error(error));
      Swal.fire("Error!", "Update failed", "error");
    }
  };


export const deleteTrial = (id: any) => async (dispatch: any) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "This trial will be deactivated",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const options = {
          method: "DELETE",
          url: `${baseURL}${DELETE_TRIAL}/${id}`,
          headers: {
            "Content-Type": "application/json",
          },
        };

        const resp : any = await axios.request(options);
        

        if (resp.baseResponse.status === 1) {
          Swal.fire(
            "Deleted!",
            resp.data.baseResponse.message,
            "success"
          ).then(() => {
            dispatch(GetAllTrials());
          });
        } else {
          Swal.fire("Error!", resp.data.baseResponse.message, "error");
        }
      }
    });
  } catch (error) {
    dispatch(api_is_error(error));
    Swal.fire("Error!", "Delete failed", "error");
  }
};
