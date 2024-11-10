import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 0,
  loading: false,
};

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    setLoginInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
    setLoginStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { setLoginInfo, setLoading, setLoginStep } = actions;
export default reducer;
