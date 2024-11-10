import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";
import {
  setTaskTypes,
  setTasks,
  setTaskLoading,
} from "../../reducers/helpAndSupport/task";
import { setContentLoading } from "../../reducers/content-loading";

export const addTask =
  (data: {}, onCloseModal: () => void) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(
        api.settingsApi.addTask,
        data,
        undefined,
        true
      );

      if (response) {
        onCloseModal();
        dispatch(getAllTask());
      }
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };

export const getAllTask = () => async (dispatch: AppDispatch) => {
  dispatch(setContentLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.getAllTask,
      {}
    );

    dispatch(setTasks(response.data));
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setContentLoading(false));
  }
};

export const getAllTaskType = () => async (dispatch: AppDispatch) => {
  dispatch(setTaskLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.taskTypeGetAll,
      {}
    );

    dispatch(setTaskTypes(response.data));
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setTaskLoading(false));
  }
};
