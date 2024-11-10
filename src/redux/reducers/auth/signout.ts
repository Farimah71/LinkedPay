import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  loading: false,
};

const signoutSlice = createSlice({
  initialState,
  name: "signout",
  reducers: {
    setSignoutLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = signoutSlice;
export const { setSignoutLoading } = actions;
export default reducer;
