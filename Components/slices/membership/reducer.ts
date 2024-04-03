import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  error: <any>"",
  membershipdata: <any>[],
  subcat: <any>[],
};

const membershipSlices = createSlice({
  name: "category",
  initialState,
  reducers: {
    api_is_loading(state, action) {
      state.isloading = action.payload;
      state.error = "";
      state.membershipdata = [];
    },
    api_is_error(state, action) {
      state.isloading = false;
      state.error = action.payload;
      state.membershipdata = [];
    },
    api_is_success(state, action) {
      state.isloading = false;
      state.error = "";
      state.membershipdata = action.payload.response;
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
} = membershipSlices.actions;

export default membershipSlices.reducer;
