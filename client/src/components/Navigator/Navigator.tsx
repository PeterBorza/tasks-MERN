import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { warningNotification } from "../Notifications/Notifications";

const Navigator = () => {
  useEffect(() => {
    warningNotification("This route does not exist!");
  }, []);

  return <Navigate to="/" replace />;
};

export default Navigator;
