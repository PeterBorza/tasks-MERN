export enum Status {
  SUCCESS = "Success",
  ERROR = "Error",
  WARN = "Warn",
}

export type Response<T = void> = {
  status: Status;
  message?: string;
  result?: T;
  count?: number;
};
