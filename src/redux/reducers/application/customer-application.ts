import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState & { error?: string | string[] } = {
  info: {},
  loading: false,
  step: 1,
  error: "",
};

const customerApplicationSlice = createSlice({
  initialState,
  name: "customerApplication",
  reducers: {
    setCustomerApplicationInfo: (state, action) => {
      state.info = action.payload;
    },
    setCustomerApplicationStep: (state, action: { payload: number }) => {
      state.step = action.payload;
    },
    setCustomerApplicationError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = customerApplicationSlice;
export const {
  setCustomerApplicationInfo,
  setCustomerApplicationStep,
  setCustomerApplicationError,
  setLoading,
} = actions;
export default reducer;
