import Swal from "sweetalert2";
import {
  GET_ALL_PRODUCT,
  baseURL,
  POST_NEW_PRODUCT,
  UPDATE_STOCK,
} from "Components/helpers/url_helper";
import axios from "axios";
import { api_is_error, api_is_loading, api_is_success } from "./reducer";

export const GetAllProduct = () => async (dispatch: any) => {
  try {
    const options = {
      method: "GET",
      url: `${baseURL}${GET_ALL_PRODUCT}`,
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

export const PostProduct = (values: any) => async (dispatch: any) => {
  try {
    const form = new FormData();
    form.append("name", values.name);
    form.append("shortDescription", values.shortDescription);
    values.images.map((item: any) => form.append("productImage", item));
    form.append("status", values.status);
    form.append("categoryId", values.categoryId);
    form.append("subCategoryId", values.subCategoryId);
    form.append("regularPrice", values.regularPrice);
    form.append("price", values.price);
    form.append("qty", values.qty);
    form.append("sku", values.sku);
    form.append("description", values.description);
    form.append("unit", values.unit);
    form.append("unit_value", values.unit_value);
    form.append("location", JSON.stringify(values.location));
    form.append("subscription_active", values.subscription_active);
    form.append("productType", values.product_type);
    form.append("membership_offer", values.membership_offer);
    form.append("subscription_type", values.subscription_type);

    const options = {
      method: "POST",
      url: `${baseURL}${POST_NEW_PRODUCT}`,
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
    if (response.status === 1) {
      dispatch(SingleProductImage(values));
      /* Add SweetAlert Success */
      Swal.fire({
        title: "Good job!",
        text: response.message,
        icon: "success",
      }).then(() => {
        dispatch(GetAllProduct());
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

export const SingleProductImage = (values: any) => async (dispatch: any) => {
  try {
    const form = new FormData();
    form.append("name", values.name);
    form.append("status", values.status);
    form.append("icon", values.iconImage);

    const options = {
      method: "POST",
      url: `${baseURL}/product/single-image-product`,
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
    if (response.status === 1) {
      /* Add SweetAlert Success */
      Swal.fire({
        title: "Good job!",
        text: response.message,
        icon: "success",
      }).then(() => {
        dispatch(GetAllProduct());
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

export const updateStock = (id: any, value: any) => async (dispatch: any) => {
  const options = {
    method: "POST",
    url: `${baseURL}${UPDATE_STOCK}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: { productId: id, qty: JSON.parse(value) },
  };
  const fetchapi = await axios.request(options);
  const resp: any = await fetchapi;
  const { response, baseResponse } = resp;
  if (baseResponse.status === 1) {
    Swal.fire({
      title: "Good job!",
      text: baseResponse.message,
      icon: "success",
    }).then(() => {
      dispatch(GetAllProduct());
    });
  } else {
    Swal.fire({
      title: "Error !!!",
      text: baseResponse.message,
      icon: "error",
    });
  }
};
