import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const resendCodeSlice = createSlice({
  initialState,
  name: "resendCode",
  reducers: {
    setResendCodeLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = resendCodeSlice;
export const { setResendCodeLoading } = actions;
export default reducer;
