import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isContentLoading: false,
};

const contentLoadingSlice = createSlice({
  initialState,
  name: "contentLoading",
  reducers: {
    setContentLoading: (state, action: { payload: boolean }) => {
      state.isContentLoading = action.payload;
    },
  },
});

const { reducer, actions } = contentLoadingSlice;
export const { setContentLoading } = actions;
export default reducer;
