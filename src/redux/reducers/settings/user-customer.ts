import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step: 0,
  loading: false,
};

const userCustomerSlice = createSlice({
  initialState,
  name: "userCustomer",
  reducers: {
    setUserCustomerInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = userCustomerSlice;
export const { setUserCustomerInfo , setLoading } = actions;
export default reducer;
