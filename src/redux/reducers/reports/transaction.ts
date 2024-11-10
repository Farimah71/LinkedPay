import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState & {
    filterValue:{
      "StartDate":string | null,
      "EndDate":string | null,
      "TransactionTypeId": string | null,
      "TransactionSuccessId": string | null,
      "TransactionNumber": string | null,
      "SiteId": string | null,
      "BankId": string | null,
      "CurrencyId": string | null,
      "PanNumber": string | null,
      "SalesType": string | null,
      "DateType": string | null,
      "PageNumber": number,
      "PageSize": number
    }
} = {
  info: {},
  step: 1,
  loading: false,
  filterValue:{
      "StartDate":null,
      "EndDate":null,
      "TransactionTypeId": "0",
      "TransactionSuccessId": null,
      "TransactionNumber": null,
      "SiteId": null,
      "BankId": null,
      "CurrencyId": "1",
      "PanNumber": null,
      "SalesType": null,
      "DateType": null,
      "PageNumber": 1,
      "PageSize": 25
  },
  editInfo:{}
};

const transactionReportSlice = createSlice({
  initialState,
  name: "transactionReport",
  reducers: {
    setTransactionReportInfo: (state, action) => {
      state.info = action.payload;
    },
    setTransactionReportEditInfo:(state , action) => {
        state.editInfo=action.payload
    },
    setTransactionReportFilterValue:(state , action) => {
        state.filterValue=action.payload
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = transactionReportSlice;
export const { setTransactionReportInfo , setTransactionReportEditInfo , setTransactionReportFilterValue , setLoading } = actions;
export default reducer;
