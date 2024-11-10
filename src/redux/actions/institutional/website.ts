import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";
import { setWebsiteInfo } from "../../reducers/institutional/website";
import { setContentLoading } from "../../reducers/content-loading";
import { Dispatch, SetStateAction } from "react";
import { setShowModal } from "../../reducers/show-modal";

export const getAllWebsite = (data : {pageNumber : number , pageSize : number}) => async (dispatch: AppDispatch) => {
    dispatch(setContentLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.websiteGetAll,
      data
    );

    dispatch(setWebsiteInfo(response.data));

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setContentLoading(false));
  }
};

export const websiteAdd = (data : {}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.websiteAdd,
      data,
      undefined,
      true
    );

    dispatch(setShowModal({isShow:true , type:"success"}));

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};