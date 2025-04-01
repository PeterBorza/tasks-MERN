import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../features";
import styled from "styled-components";

const Home = () => {
  return (
    <AppContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default Home;
