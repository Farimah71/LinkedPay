import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  loading: false,
};

const professionSlice = createSlice({
  initialState,
  name: "profession",
  reducers: {
    setProfessionInfo: (state, action) => {
      state.info = action.payload;
    },
    setProfessionLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = professionSlice;
export const { setProfessionInfo, setProfessionLoading } = actions;
export default reducer;
