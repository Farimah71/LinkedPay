import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState & {
    filterValue:{
      "StartDate": string | null,
      "EndDate": string | null,
      "SiteId": string | null,
      "PageNumber": number | null,
      "PageSize": number | null,
      "RefrenceNumber" : string | null,
      "DateType": string | null,
    }
} = {
  info: {},
  step: 1,
  loading: false,
  filterValue:{
      "StartDate": "2021-04-02T00:00:00",
        "EndDate": "2024-05-02T00:00:00",
        "SiteId": null,
        "PageNumber": 1,
        "PageSize": 25,
        "RefrenceNumber" : null,
        "DateType": null
  },
  editInfo:{}
};

const progressPaymentReportSlice = createSlice({
  initialState,
  name: "progressPaymentReport",
  reducers: {
    setProgressPaymentReportInfo: (state, action) => {
      state.info = action.payload;
    },
    setProgressPaymentReportEditInfo:(state , action) => {
        state.editInfo=action.payload
    },
    setProgressPaymentReportFilter:(state , action) => {
        state.filterValue=action.payload
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = progressPaymentReportSlice;
export const { setProgressPaymentReportInfo , setProgressPaymentReportEditInfo , setProgressPaymentReportFilter , setLoading } = actions;
export default reducer;
