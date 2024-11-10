import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 0,
  loading: false,
};

const forgetPasswordSlice = createSlice({
  initialState,
  name: "forgetPassword",
  reducers: {
    setForgetPasswordInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
    setForgetPasswordStep: (state, action: { payload: number }) => {
      state.step = action.payload;
    },
  },
});

const { reducer, actions } = forgetPasswordSlice;
export const { setForgetPasswordInfo, setForgetPasswordStep, setLoading } =
  actions;
export default reducer;
