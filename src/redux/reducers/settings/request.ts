import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  loading: false,
};

const requestSlice = createSlice({
  initialState,
  name: "request",
  reducers: {
    setRequestInfo: (state, action) => {
      state.info = action.payload;
    },
    setRequestLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = requestSlice;
export const { setRequestInfo, setRequestLoading } = actions;
export default reducer;
