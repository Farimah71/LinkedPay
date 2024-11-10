import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import {
  setForgetPasswordInfo,
  setForgetPasswordStep,
} from "../../reducers/auth/forget-password";
import { AppDispatch } from "../../store/store";
import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { setShowModal } from "../../reducers/show-modal";
import {
  ForgotPasswordInputs,
  SetPasswordInputs,
} from "../../../pages/auth/forgot-password/forgot-password.types";
import { setSuccessMessage } from "../../reducers/success-response";

export const ForgetPasswordRequest =
  (data: ForgotPasswordInputs) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(
        api.AuthApi.forgotPassword,
        data
      );
      dispatch(setForgetPasswordInfo(response.data?.userInfo));
      localStorage.trpos__token = response.data?.token;
      dispatch(setForgetPasswordStep(1));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      dispatch(setShowModal({ isShow: true, type: "error" }));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };

export const ResetPassword =
  (data: SetPasswordInputs) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: any = await createData(api.AuthApi.resetPassword, data, {
        Authorization: `Bearer ${localStorage.trpos__token}`,
      } as AxiosRequestHeaders);

      dispatch(setSuccessMessage(response.message[1]));
      dispatch(setShowModal({ isShow: true, type: "success" }));
      localStorage.removeItem("trpos__token");
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      dispatch(setShowModal({ isShow: true, type: "error" }));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };
