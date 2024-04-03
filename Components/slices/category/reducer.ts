import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  error: <any>"",
  categorydata: <any>[],
  subcat: <any>[],
};

const categorySlices = createSlice({
  name: "category",
  initialState,
  reducers: {
    api_is_loading(state, action) {
      state.isloading = action.payload;
      state.error = "";
      state.categorydata = [];
    },
    api_is_error(state, action) {
      state.isloading = false;
      state.error = action.payload;
      state.categorydata = [];
    },
    api_is_success(state, action) {
      state.isloading = false;
      state.error = "";
      state.categorydata = action.payload.response;
    },
    api_is_sub_success(state, action) {
      console.log("action.payload:", action.payload);
      state.isloading = false;
      state.error = "";
      state.subcat = action.payload.response;
    },
  },
});

export const {
  api_is_loading,
  api_is_error,
  api_is_success,
  api_is_sub_success,
} = categorySlices.actions;

export default categorySlices.reducer;
