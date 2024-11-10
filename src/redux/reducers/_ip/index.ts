import { createSlice } from "@reduxjs/toolkit";

const initialState: { ip: string } = {
  ip: "",
};

const IpSlice = createSlice({
  initialState,
  name: "ip",
  reducers: {
    setIP: (state, action) => {
      state.ip = action.payload;
    },
  },
});

const { reducer, actions } = IpSlice;
export const { setIP } = actions;
export default reducer;
