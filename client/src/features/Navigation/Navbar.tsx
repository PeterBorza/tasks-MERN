import { NavLink } from "react-router-dom";
import { HOME_ROUTE, SHOP_ROUTE, TASKS_ROUTE } from "src/Router/router";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Link to={HOME_ROUTE}>HOME</Link>
      <LinkContainer>
        <li>
          <Link to={SHOP_ROUTE}>Shop</Link>
        </li>
        <li>
          <Link to={TASKS_ROUTE}>Tasks</Link>
        </li>
      </LinkContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 8px 16px;
  gap: 8px;
  height: 3rem;
  box-shadow: -1px -1px 10px rgba(0, 0, 0, 0.3);
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 2rem;
  margin-inline: auto 1rem;

  li {
    list-style-type: none;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.green.darkest};
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.colors.green.default_light};
  }
  &.active {
    color: #ffaa00;
  }
`;

export default Navbar;
