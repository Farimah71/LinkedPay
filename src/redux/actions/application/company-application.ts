import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { setCompanyApplicationStep } from "../../reducers/application/company-application";
import { AppDispatch } from "../../store/store";
import { getUserInfo } from "../settings/user-info";

export const setAuthorizationInformation =
  () => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      await dispatch(getUserInfo());

      dispatch(setCompanyApplicationStep(3));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      dispatch(setCompanyApplicationStep(2));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };
