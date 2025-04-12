import { FC, PropsWithChildren, useRef } from "react";
import { useOnClickOutside } from "src/hooks";
import styled from "styled-components";

type ModalSize = "medium" | "large" | "full-screen";

type Props = {
  onClose: () => void;
  contentSize?: ModalSize;
};

const sizes: Record<ModalSize, string> = {
  medium: "450px",
  large: "720px",
  "full-screen": "100%",
};

const Modal: FC<PropsWithChildren<Props>> = ({
  onClose,
  contentSize = "full-screen",
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([modalRef], () => onClose());
  return (
    <ModalContainer>
      <ModalContent ref={modalRef} size={sizes[contentSize]}>
        {children}
      </ModalContent>
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
  padding: 16px;
`;

const ModalContent = styled.div<{ size: string }>(
  props => `
  width: min(${props.size}, 100%);
 ${props.theme.media.mobile`width: min(300px, 100%)`}
`
);

export default Modal;
