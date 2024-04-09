import {
  GET_ALL_ORDERS,
  baseURL,
  UPDATE_ORDER,
  ASSIGN_ORDER,
  GET_ALL_SUBSCRIPTION,
} from "Components/helpers/url_helper";
import axios from "axios";
import { api_is_error, api_is_success, fetched_by_status } from "./reducer";
import Swal from "sweetalert2";

export const GetAllOrders = () => async (dispatch: any) => {
  try {
    const options = {
      method: "GET",
      url: `${baseURL}${GET_ALL_ORDERS}`,
    };
    const apifetch = await axios.request(options);
    const response: any = await apifetch;
    dispatch(api_is_success(response));
    return response;
  } catch (error) {
    dispatch(api_is_error(error));

    return error;
  }
};
export const UpdateOrder =
  (id: any, values: any, setShowStatus: any) => async (dispatch: any) => {
    try {
      const options = {
        method: "PATCH",
        url: `${baseURL}${UPDATE_ORDER}/${id}`,
        data: { status: values.orderstatus },
      };
      const apifetch = await axios.request(options);
      const response: any = await apifetch;

      if (response.baseResponse.status === 1) {
        Swal.fire({
          title: "Status Updated",
          text: "Status Updated Successfully.",
          icon: "success",
        }).then(() => {
          dispatch(GetAllOrders());
          setShowStatus(false);
        });
      } else {
        Swal.fire({
          title: "Erro While Updating",
          text: response.baseResponse.message,
          icon: "error",
        });
      }

      return response;
    } catch (error) {
      console.log(error);

      return error;
    }
  };

export const AssigneOrder =
  (id: any, values: any, setShowStatus: any) => async (dispatch: any) => {
    try {
      const options = {
        method: "PATCH",
        url: `${baseURL}${ASSIGN_ORDER}/${id}`,
        data: {
          status: values.orderstatus,
          partner: JSON.parse(values.partner),
        },
      };
      const apifetch = await axios.request(options);
      const response: any = await apifetch;

      if (response.baseResponse.status === 1) {
        Swal.fire({
          title: "Status Updated",
          text: "Status Updated Successfully.",
          icon: "success",
        }).then(() => {
          dispatch(GetAllOrders());
          setShowStatus(false);
        });
      } else {
        Swal.fire({
          title: "Erro While Updating",
          text: response.baseResponse.message,
          icon: "error",
        });
      }

      return response;
    } catch (error) {
      console.log(error);

      return error;
    }
  };

export const OrderByStatus = (status: any) => async (dispatch: any) => {
  console.log(`${baseURL}${GET_ALL_SUBSCRIPTION}/${status}`);
  try {
    const options = {
      method: "GET",
      url: `${baseURL}${GET_ALL_SUBSCRIPTION}/${status}`,
    };
    const apifetch = await axios.request(options);
    const response: any = await apifetch;

    if (response.baseResponse.status === 1) {
      console.log("fetcched fro delivery");
      dispatch(fetched_by_status(response.response));
    } else {
      console.log("unable to fetch");
    }

    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
};