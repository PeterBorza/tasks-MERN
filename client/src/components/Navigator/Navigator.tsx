import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { warningNotification } from "../Notifications";
import { HOME_ROUTE } from "src/Router";

const Navigator = () => {
  useEffect(() => {
    warningNotification("This route does not exist!");
  }, []);

  return <Navigate to={HOME_ROUTE} replace />;
};

export default Navigator;
