import { api } from "../../../api";
import { createData } from "../../../core/http-service";

export const getTaskDetail = (data: {}) => async () => {
  try {
      const response = await createData(api.settingsApi.taskDetail, data);
      console.log(response);
      
  } catch (error: any) {
    console.log(error);
  }
};
