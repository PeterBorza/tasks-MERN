import { Outlet } from "react-router-dom";
import Navbar from "../features/Navigation/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
