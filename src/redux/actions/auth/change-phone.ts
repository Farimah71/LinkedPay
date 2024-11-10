import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import {
  setChangePhoneInfo,
  setChangePhoneStep,
} from "../../reducers/auth/change-phone";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";
import { setShowModal } from "../../reducers/show-modal";

export const ChangePhoneRequest =
  (data: {}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(
        api.AuthApi.changeGsmNoLogin,
        data
      );
      dispatch(setChangePhoneInfo(response.data?.userInfo));
      localStorage.trpos__token = response.data?.token;
      dispatch(setChangePhoneStep(1));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      dispatch(setShowModal({ isShow: true, type: "error" }));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };
