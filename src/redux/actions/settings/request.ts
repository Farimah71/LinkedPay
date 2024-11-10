import { AxiosResponse } from "axios";
import { setButtonLoading } from "../../reducers/button-loading";
import { AppDispatch } from "../../store/store";
import { createData } from "../../../core/http-service";
import { api } from "../../../api";
import { setErrors } from "../../reducers/errors";
import { setRequestInfo } from "../../reducers/settings/request";
import {
  setCompanyApplicationError,
  setCompanyApplicationStep,
  setIdentityTax,
  setCompanyInformationInfo,
} from "../../reducers/application/company-application";
import { setShowModal } from "../../reducers/show-modal";

export const getFilter = () => async (dispatch: AppDispatch) => {
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.getFilterRequest,
      {}
    );
    dispatch(setRequestInfo(response.data));
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    if (error.statusCode == 410) {
      dispatch(setErrors(error.message));
      dispatch(setShowModal({ isShow: true, type: "error" }));
    }
    console.log(error);
  }
};

export const controlBeforeRegistration =
  (data: {}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(
        api.settingsApi.controlBeforeRegistration,
        data
      );
      dispatch(setIdentityTax(data));
      dispatch(setCompanyInformationInfo(response.data));
      dispatch(setCompanyApplicationStep(2));
    } catch (error: any) {
      error.statusCode == 400 &&
        dispatch(setCompanyApplicationError(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };

export const createCorporateApp =
  (data: {}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(
        api.settingsApi.corporateApp,
        data,
        undefined,
        true
      );
      console.log(response.data);
      dispatch(setCompanyApplicationStep(5));
    } catch (error: any) {
      error.statusCode == 400 &&
        dispatch(setCompanyApplicationError(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };
