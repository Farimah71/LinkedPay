import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { BASE_URL } from "../configs/global";

export const httpService = axios.create({
  baseURL: BASE_URL,
});

httpService.interceptors.request.use((config) => {
  const token = localStorage.trpos__access_token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

httpService.interceptors.response.use(
  (response: any) => {
    if (response.data?.httpStatusCode == 200) return response;
  },
  (error) => {
    if (error.response) {
      // const statusCode = error.response?.status;
      throw error.response.data;
    }
  }
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response?.data as T;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: headers,
  };

  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders,
  isMultipart?: boolean
): Promise<TResult> {
  const contentType = isMultipart ? "multipart/form-data" : "application/json";
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": contentType,
    },
    data: isMultipart ? data : JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "PUT",
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };

  return await apiBase(url, options);
}

export { readData, createData, updateData, deleteData };
