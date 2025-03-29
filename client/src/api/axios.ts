import axios, { AxiosRequestConfig } from "axios";

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
    timeout: 1000 * 20,
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
