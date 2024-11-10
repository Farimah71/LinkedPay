import { AxiosResponse } from "axios";
import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import {
  setProfessionInfo,
  setProfessionLoading,
} from "../../reducers/settings/profession";
import { AppDispatch } from "../../store/store";

export const getAllProfessions = () => async (dispatch: AppDispatch) => {
  dispatch(setProfessionLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.getAllProfession,
      null
    );
    dispatch(setProfessionInfo(response.data));
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(setProfessionLoading(false));
  }
};
