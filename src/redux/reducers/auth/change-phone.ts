import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 0,
  loading: false,
};

const changePhoneSlice = createSlice({
  initialState,
  name: "changePhone",
  reducers: {
    setChangePhoneInfo: (state, action) => {
      state.info = action.payload;
    },
    setChangePhoneStep: (state, action: { payload: number }) => {
      state.step = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = changePhoneSlice;
export const { setChangePhoneInfo, setChangePhoneStep, setLoading } = actions;
export default reducer;
