import axios, { AxiosError, AxiosRequestConfig } from "axios";

export enum Method {
  GET = "get",
  PUT = "put",
  DELETE = "delete",
  POST = "post",
  PATCH = "patch",
}

const AXIOS_TIMEOUT = 50 * 1000;

export const customAxios = async <ResponseType, BodyType = void>(
  method: Method,
  endpoint: string,
  data?: BodyType,
  config?: AxiosRequestConfig
): Promise<ResponseType> => {
  const instance = axios.create({
    timeout: AXIOS_TIMEOUT,
    headers: { "Content-Type": "application/json" },
    validateStatus: status => status < 400,
    ...config,
  });

  try {
    const response = await instance[method](endpoint, data, config);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data.message);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Something went wrong, please try again later");
  }
};
