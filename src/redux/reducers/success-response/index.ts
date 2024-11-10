import { createSlice } from "@reduxjs/toolkit";

const initialState: { message: string } = {
  message: "",
};

const successMessageSlice = createSlice({
  initialState,
  name: "successMessage",
  reducers: {
    setSuccessMessage: (state, action: { payload: string }) => {
      state.message = action.payload;
    },
  },
});

const { reducer, actions } = successMessageSlice;
export const { setSuccessMessage } = actions;
export default reducer;
