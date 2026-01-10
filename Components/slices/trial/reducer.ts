import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  error: <any>"",
  trialdata: <any>[],
  selectedtrial: <any>{},
};

const trialSlices = createSlice({
  name: "trial",
  initialState,
  reducers: {
    api_is_loading(state, action) {
      state.isloading = action.payload;
      state.error = "";
      state.trialdata = [];
    },
    api_is_error(state, action) {
      state.isloading = false;
      state.error = action.payload;
      state.trialdata = [];
    },
    api_is_success(state, action) {
      state.isloading = false;
      state.error = "";
      state.trialdata = action.payload;
    },
    selected_trial(state, action) {
      state.isloading = false;
      state.error = "";
      state.selectedtrial = action.payload;
    },
    is_selected_trial(state, action) {
      state.selectedtrial = action.payload;
    },
  },
});

export const {
  api_is_loading,
  api_is_error,
  api_is_success,
  selected_trial,
  is_selected_trial,
} = trialSlices.actions;

export default trialSlices.reducer;
