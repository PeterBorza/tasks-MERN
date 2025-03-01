import { Link } from "react-router-dom";
import styled from "styled-components";

// TODO: import NavLink to see active item styles

const Navbar = () => {
  return (
    <Nav>
      <LinkContainer>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </LinkContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 8px;
  gap: 8px;
  height: 3rem;
  box-shadow: -1px -1px 10px rgba(255, 255, 255, 0.3);
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 1rem;
  margin-left: auto;

  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.green.darkest};
    }
    &:hover a {
      color: ${props => props.theme.colors.green.default_light};
    }
  }
`;

export default Navbar;
