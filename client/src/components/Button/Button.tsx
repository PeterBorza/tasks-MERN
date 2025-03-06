import { ThemeType } from "src/styled-components";
import styled from "styled-components";

type ButtonType = "warn" | "valid" | "disabled";

type Props = {
  label: string;
  onClick: () => void;
  type?: ButtonType;
};

const backgrounds = (props: ThemeType): Record<ButtonType, string> => ({
  warn: props.colors.main,
  valid: props.colors.green.darker,
  disabled: props.colors.error,
});

const Button = ({ label, onClick, type = "valid" }: Props) => {
  return (
    <StyledButton $type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $type: ButtonType }>`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${props => backgrounds(props.theme)[props.$type]};
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  transition:
    scale 100ms,
    box-shadow 120ms;
  &:hover {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  }
  &:active {
    scale: 0.98;
  }
`;

export default Button;
