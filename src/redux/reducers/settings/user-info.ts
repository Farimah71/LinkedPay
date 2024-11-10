import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 1,
  loading: false,
};

const userInfoSlice = createSlice({
  initialState,
  name: "userInfo",   
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
    setUserInfoStep: (state, action: { payload: number }) => {
      state.step = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = userInfoSlice;
export const { setUserInfo , setUserInfoStep , setLoading } = actions;
export default reducer;
