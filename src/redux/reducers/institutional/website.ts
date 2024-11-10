import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 1,
  loading: false,
};

const websiteSlice = createSlice({
  initialState,
  name: "website",
  reducers: {
    setWebsiteInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = websiteSlice;
export const { setWebsiteInfo , setLoading } = actions;
export default reducer;
