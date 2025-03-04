import { ReactNode } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (component: ReactNode) => toast(component, { autoClose: 5000 });
