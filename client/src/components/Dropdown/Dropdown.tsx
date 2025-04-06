import { FC, PropsWithChildren, ReactNode, useRef, useState } from "react";
import styled from "styled-components";

import { useOnClickOutside } from "src/hooks";
import { Button } from "../Button";

type Props = {
  label: ReactNode;
};

const Dropdown: FC<PropsWithChildren<Props>> = ({ label, children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside([ref], () => setOpenMenu(false));

  return (
    <Container ref={ref}>
      <Button onClick={() => setOpenMenu(prev => !prev)}>{label}</Button>
      {openMenu && <Menu>{children}</Menu>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  height: min-content;
  margin-top: 4px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.green.default_dark};
  padding: 8px;
  box-shadow: 0 0 10px ${props => props.theme.colors.green.default_dark};
`;

export default Dropdown;
