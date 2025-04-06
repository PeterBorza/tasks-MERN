import { FC, PropsWithChildren, useRef } from "react";
import { useOnClickOutside } from "src/hooks";
import styled from "styled-components";

type Props = {
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<Props>> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([modalRef], () => onClose());
  return (
    <ModalContainer>
      <ModalContent ref={modalRef}>{children}</ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 8px;
`;

const ModalContent = styled.div`
  width: min(400px, 100%);
`;

export default Modal;
