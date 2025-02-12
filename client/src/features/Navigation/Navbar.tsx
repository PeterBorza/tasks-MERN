import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/tasks">Tasks</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 8px;
  gap: 8px;
`;

export default Navbar;
