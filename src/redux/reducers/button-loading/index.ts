import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isButtonLoading: false,
};

const buttonLoadingSlice = createSlice({
  initialState,
  name: "buttonLoading",
  reducers: {
    setButtonLoading: (state, action: { payload: boolean }) => {
      state.isButtonLoading = action.payload;
    },
  },
});

const { reducer, actions } = buttonLoadingSlice;
export const { setButtonLoading } = actions;
export default reducer;
