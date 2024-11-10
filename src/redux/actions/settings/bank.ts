import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { AppDispatch } from "../../store/store";
import { AxiosResponse } from "axios";
import { setBankList , setLoading } from "../../reducers/settings/bank";

export const getBankList = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.bankList,
      {}
    );

    dispatch(setBankList(response.data));

  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};