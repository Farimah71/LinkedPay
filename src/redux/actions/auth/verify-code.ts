import { api } from "../../../api";
import { AxiosRequestHeaders } from "axios";
import { createData } from "../../../core/http-service";
import { VerifyCode } from "../../../types/verify-code.interface";
import { setSignupStep } from "../../reducers/auth/signup";
import { AppDispatch } from "../../store/store";
import { setButtonLoading } from "../../reducers/button-loading";
import { setShowModal } from "../../reducers/show-modal";
import { setErrorCode, setErrors } from "../../reducers/errors";
import { setResendCodeLoading } from "../../reducers/settings/resend-code";
import { setLoginStep } from "../../reducers/auth/login";
import { VerifyCodeActionTypes } from "../../../types/verify-code-action-type.types";
import { setForgetPasswordStep } from "../../reducers/auth/forget-password";
import { setChangePhoneStep } from "../../reducers/auth/change-phone";

type VerifyType = "GSM" | "email";

export const verifyCode =
  (
    data: VerifyCode,
    actionType: VerifyCodeActionTypes,
    verifyType: VerifyType,
    navigate?: any
  ) =>
  async (dispatch: AppDispatch) => {
    if (actionType == "login") {
      dispatch(setShowModal({ isShow: true, type: "success" }));
    } else {
      dispatch(setButtonLoading(true));
    }

    try {
      const response: any = await createData(api.AuthApi.verifyCode, data, {
        Authorization: `Bearer ${localStorage.trpos__token}`,
      } as AxiosRequestHeaders);

      if (response?.httpStatusCode == 200) {
        if (actionType == "signup") {
          verifyType == "GSM" && dispatch(setSignupStep(2));
          if (verifyType == "email") {
            dispatch(setShowModal({ isShow: true, type: "success" }));
            localStorage.trpos__token = response.data?.accessTokenDto?.token;
          }
        }

        if (actionType == "login") {
          if (
            response.data?.returnPath == "PasswordRenew" &&
            response.message ==
              "Şifre süreniz doldu. Lütfen şifrenizi sıfırlayınız."
          ) {
            navigate("/forgot-password");
          } else {
            dispatch(setShowModal({ isShow: false, type: "" }));
            navigate("/dashboard/application", {
              state: { token: response.data?.accessTokenDto?.token },
            });
            localStorage.removeItem("trpos__token");
            localStorage.trpos__access_token =
              response.data?.accessTokenDto?.token;
            localStorage.trpos__token_expire =
              response.data?.accessTokenDto?.expiration;
          }
          dispatch(setLoginStep(0));
        }

        if (actionType == "forgot-password") {
          dispatch(setForgetPasswordStep(2));
          localStorage.trpos__token = response.data?.accessTokenDto?.token;
        }

        if (actionType == "change-phone") {
          if (verifyType == "GSM") {
            localStorage.trpos__token = response.data?.accessTokenDto?.token;
            dispatch(setChangePhoneStep(2));
          }
          if (verifyType == "email") {
            dispatch(setShowModal({ isShow: true, type: "success" }));
            localStorage.removeItem("trpos__token");
          }
        }
      }
    } catch (error: any) {
      dispatch(setErrors(error?.message));
      dispatch(setShowModal({ isShow: true, type: "error" }));
      console.log(error);
    } finally {
      if (actionType != "login") {
        dispatch(setButtonLoading(false));
      }
    }
  };

export const resendCode = () => async (dispatch: AppDispatch) => {
  dispatch(setResendCodeLoading(true));
  try {
    await createData(
      api.AuthApi.resendCode,
      {
        methodName: "corporateresendcode",
      },
      {
        Authorization: `Bearer ${localStorage.trpos__token}`,
      } as AxiosRequestHeaders
    );
  } catch (error: any) {
    dispatch(setErrors(error?.message));
    dispatch(setShowModal({ isShow: true, type: "error" }));
    error.statusCode == 419 && dispatch(setErrorCode(error.statusCode));
    console.log(error);
  } finally {
    dispatch(setResendCodeLoading(false));
  }
};
