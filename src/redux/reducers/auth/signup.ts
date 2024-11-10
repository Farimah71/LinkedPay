import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 0,
  loading: false,
};

const signupSlice = createSlice({
  initialState,
  name: "signup",
  reducers: {
    setSignupInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
    setSignupStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

const { reducer, actions } = signupSlice;
export const { setSignupInfo, setLoading, setSignupStep } = actions;
export default reducer;
