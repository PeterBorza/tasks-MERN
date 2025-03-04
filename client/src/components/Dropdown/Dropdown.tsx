import { FC, PropsWithChildren, useRef, useState } from "react";
import { Button } from "../Button";
import styled from "styled-components";
import { useOnClickOutside } from "src/hooks";

type Props = {
  label: string;
};

const Dropdown: FC<PropsWithChildren<Props>> = ({ label, children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside([ref], () => setOpenMenu(false));

  return (
    <Container ref={ref}>
      <Button label={label} onClick={() => setOpenMenu(prev => !prev)} />
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
  box-shadow: 1px 1px 10px rgba(30, 30, 30, 0.3);
`;

export default Dropdown;
