import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import {
  setContractTypeInfo,
  setContractTypeLoading,
} from "../../reducers/settings/contract-type";
import { AppDispatch } from "../../store/store";

export const getAllContractTypes = () => async (dispatch: AppDispatch) => {
  dispatch(setContractTypeLoading(true));
  try {
    const response: any = await createData(api.settingsApi.contractTypes, null);
    dispatch(setContractTypeInfo(response.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setContractTypeLoading(false));
  }
};
