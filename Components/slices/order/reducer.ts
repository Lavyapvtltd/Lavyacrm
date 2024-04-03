import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  error: <any>"",
  orderData: <any>[],
  selectedorder: <any>[],
};

const orderSlices = createSlice({
  name: "order",
  initialState,
  reducers: {
    api_is_loading(state, action) {
      state.isloading = action.payload;
      state.error = "";
      state.orderData = [];
    },
    api_is_error(state, action) {
      state.isloading = false;
      state.error = action.payload;
      state.orderData = [];
    },
    api_is_success(state, action) {
      state.isloading = false;
      state.error = "";
      state.orderData = action.payload;
    },
    is_selected_success(state, action) {
      state.isloading = false;
      state.error = "";
      state.selectedorder = action.payload;
    },
  },
});

export const {
  api_is_loading,
  api_is_error,
  api_is_success,
  is_selected_success,
} = orderSlices.actions;

export default orderSlices.reducer;
