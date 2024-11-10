import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";
import { setContentLoading } from "../../reducers/content-loading";
import { setTransactionReportInfo , setTransactionReportEditInfo , setLoading } from "../../reducers/reports/transaction";
import { setButtonLoading } from "../../reducers/button-loading";

export const getVposTransaction = (data : {}) => async (dispatch: AppDispatch) => {
    dispatch(setContentLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.VposTransaction,
      data
    );

    dispatch(setTransactionReportInfo(response.data));

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setContentLoading(false));
  }
};

export const getVposTransactionDetail = (data : {VPosTransactionId:string}) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.VposTransactionDetail,
      data
    );

    dispatch(setTransactionReportEditInfo(response.data));

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};


export const vposCancel = (data : {transactionId: number , clientIp: string , description: string}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.cancelVPos,
      data
    );

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};

export const vposRefund = (data : {transactionId: number , description:string , refundAmountStr: string}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.refundVPos,
      data
    );

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};