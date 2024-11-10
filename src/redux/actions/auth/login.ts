import { AxiosResponse } from "axios";
import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { LoginInput } from "../../../pages/auth/login/types/login.types";
import { setLoginInfo, setLoginStep } from "../../reducers/auth/login";
import { setButtonLoading } from "../../reducers/button-loading";
import { setErrors } from "../../reducers/errors";
import { setShowModal } from "../../reducers/show-modal";
import { AppDispatch } from "../../store/store";

export const login = (data: LoginInput) => async (dispatch: AppDispatch) => {
  dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(api.AuthApi.login, data);
    localStorage.trpos__token = response.data.token;
    localStorage.trpos__user_info = JSON.stringify(response.data?.userInfo);
    localStorage.trpos__user_type = response.data?.userInfo?.userType;
    dispatch(setLoginInfo(response.data?.userInfo));
    dispatch(setLoginStep(1));
  } catch (error: any) {
    console.log(error);
    if (error.statusCode == "423" || error.statusCode == "400") {
      dispatch(setErrors(error.message));
      dispatch(setShowModal({ isShow: true, type: "error" }));
    }
  } finally {
    dispatch(setButtonLoading(false));
  }
};
