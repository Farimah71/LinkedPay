import { api } from "../../../api";
import { AppDispatch } from "../../store/store";
import {
  setCustomerApplicationError,
  setCustomerApplicationStep,
} from "../../reducers/application/customer-application";
import { setButtonLoading } from "../../reducers/button-loading";
import { createData } from "../../../core/http-service";

export const customerVerify = (data: {}) => async (dispatch: AppDispatch) => {
  dispatch(setButtonLoading(true));
  try {
    const response = await createData(
      api.settingsApi.customerVerify,
      data,
      undefined,
      true
    );
    console.log(response);
    response && dispatch(setCustomerApplicationStep(3));
  } catch (error: any) {
    error.statusCode == 400 &&
      dispatch(setCustomerApplicationError(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};
