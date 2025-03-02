import { Outlet } from "react-router-dom";
import { Navbar } from "../features";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
