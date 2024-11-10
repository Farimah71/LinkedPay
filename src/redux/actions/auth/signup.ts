import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { setSignupInfo, setSignupStep } from "../../reducers/auth/signup";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";

export const register = (data: {}) => async (dispatch: AppDispatch) => {
  dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.AuthApi.register,
      data
    );
    localStorage.trpos__token = response.data.token;
    dispatch(setSignupInfo(response.data?.userInfo));
    dispatch(setSignupStep(1));
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};
