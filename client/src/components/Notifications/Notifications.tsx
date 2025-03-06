import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DEFAULT_AUTO_CLOSE = 2000;

const successNotification = (message: string, autoClose: number = DEFAULT_AUTO_CLOSE) =>
  toast.success(message, { autoClose });

const warningNotification = (message: string, autoClose: number = DEFAULT_AUTO_CLOSE) =>
  toast.warn(message, { autoClose });

const errorNotification = (message: string, autoClose: number = DEFAULT_AUTO_CLOSE) =>
  toast.error(message, { autoClose });

export { successNotification, warningNotification, errorNotification };
