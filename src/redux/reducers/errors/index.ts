import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: [],
  errorCode: null,
};

const errorsSlice = createSlice({
  initialState,
  name: "errors",
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setErrorCode: (state, action) => {
      state.errorCode = action.payload;
    },
  },
});

const { reducer, actions } = errorsSlice;
export const { setErrors, setErrorCode } = actions;
export default reducer;
