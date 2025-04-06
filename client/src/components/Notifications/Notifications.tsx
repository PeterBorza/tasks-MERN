import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DEFAULT_AUTO_CLOSE = 2000;

const successNotification = (
  message: string,
  toastId: string = "",
  autoClose: number = DEFAULT_AUTO_CLOSE
) => toast.success(message, { autoClose, toastId });

const warningNotification = (
  message: string,
  toastId: string = "",
  autoClose: number = DEFAULT_AUTO_CLOSE
) => toast.warn(message, { autoClose, toastId });

const errorNotification = (
  message: string,
  toastId: string = "",
  autoClose: number = DEFAULT_AUTO_CLOSE
) => toast.error(message, { autoClose, toastId });

export { successNotification, warningNotification, errorNotification };
