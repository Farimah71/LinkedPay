import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";
import { setContentLoading } from "../../reducers/content-loading";
import { setProgressPaymentReportInfo } from "../../reducers/reports/progress-payment";

export const getVposProgressPayment = (data : {}) => async (dispatch: AppDispatch) => {
    dispatch(setContentLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.VposPayback,
      data
    );

    dispatch(setProgressPaymentReportInfo(response.data));

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setContentLoading(false));
  }
};