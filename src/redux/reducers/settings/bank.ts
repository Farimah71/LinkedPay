import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  loading: false,
};

const bankListSlice = createSlice({
  initialState,
  name: "bankList",
  reducers: {
    setBankList: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = bankListSlice;
export const { setBankList , setLoading } = actions;
export default reducer;
