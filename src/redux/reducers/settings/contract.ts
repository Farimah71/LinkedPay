import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  loading: false,
};

const contractSlice = createSlice({
  initialState,
  name: "contract",
  reducers: {
    setContractInfo: (state, action) => {
      state.info = action.payload;
    },
    setContractLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = contractSlice;
export const { setContractInfo, setContractLoading } = actions;
export default reducer;
