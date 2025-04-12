export type Response<T = void> = {
  message?: string;
  result?: T;
  count?: number;
};
