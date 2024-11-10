import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 0,
  loading: false,
};

const changeTokenSlice = createSlice({
  initialState,
  name: "changeToken",
  reducers: {
    setChangeTokenInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = changeTokenSlice;
export const { setChangeTokenInfo , setLoading } = actions;
export default reducer;
