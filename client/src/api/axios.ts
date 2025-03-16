import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_BASE_URI
  : import.meta.env.VITE_PROD_URI;

export const TASKS = "/api/tasks";

// document location host gives back the complete url;
// console.log(document.location.host);

export const axiosAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 5, // wait for 5 seconds before cancelling request
  headers: { Accept: "application/json" },
});

// TODO     -add all task related fetches to api/tasks-api.ts
//          -add converters file to api/converters.ts

// authentication and local storage session cleanup on error: here, when auth is implemented

export enum Method {
  GET = "get",
  PUT = "put",
  DELETE = "delete",
  POST = "post",
  PATCH = "patch",
}

export const customAxios = async <ResponseType, BodyType = void>(
  method: Method,
  endpoint: string,
  data?: BodyType,
  config?: AxiosRequestConfig
): Promise<ResponseType> => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000 * 5,
    headers: { "Content-Type": "application/json" },
    validateStatus: status => status < 600,
    ...config,
  });

  try {
    const response = await instance[method](endpoint, data, config);
    return response.data;
  } catch (error) {
    return { message: error } as ResponseType;
  }
};
