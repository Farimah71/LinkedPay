import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setUserCustomerInfo } from "../../reducers/settings/user-customer";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";
import { setContentLoading } from "../../reducers/content-loading";

export const getAllUserCustomer = () => async (dispatch: AppDispatch) => {
  dispatch(setContentLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.getAllUserCustomer,
      {}
    );
    dispatch(setUserCustomerInfo(response.data));
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setContentLoading(false));
  }
};
