import { createSlice } from "@reduxjs/toolkit";

const initialState : {
  showModal : {isShow : boolean , type:string},
  payload:any
} = {
  showModal: { isShow: false, type: "" },
  payload:{}
};

const showModalSlice = createSlice({
  initialState,
  name: "showModal",
  reducers: {
    setShowModal: (
      state,
      action: { payload: { isShow: boolean; type: string } }
    ) => {
      state.showModal = action.payload;
    },
    setPayloadModal : (state , action) => {
      state.payload=action.payload;
    }
  },
});

const { reducer, actions } = showModalSlice;
export const { setShowModal , setPayloadModal } = actions;
export default reducer;
