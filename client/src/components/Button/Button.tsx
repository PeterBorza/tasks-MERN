import { PropsWithChildren } from "react";
import styled, { DefaultTheme } from "styled-components";

type ButtonType = "warn" | "valid" | "disabled";

type Props = PropsWithChildren & {
  onClick: () => void;
  type?: ButtonType;
  title?: string;
};

const backgrounds = (props: DefaultTheme): Record<ButtonType, string> => ({
  warn: props.colors.main,
  valid: props.colors.green.darker,
  disabled: props.colors.error,
});

const Button = ({ children, onClick, type = "valid", title = "" }: Props) => {
  return (
    <StyledButton
      $type={type}
      onClick={onClick}
      disabled={type === "disabled"}
      title={title}
      aria-label={title}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $type: ButtonType }>`
  color: ${props => props.theme.colors.light};
  padding: 4px 8px;
  cursor: pointer;
  background-color: ${props => backgrounds(props.theme)[props.$type]};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition:
    scale 100ms,
    box-shadow 120ms;
  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  }
  &:active {
    scale: 0.98;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
