import styled from "styled-components";

type Props = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.green.darker};
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  transition: scale 100ms;
  &:hover {
    border-color: ${props => props.theme.colors.green.light};
    transition: border-color 200ms;
  }
  &:active {
    scale: 0.98;
  }
`;

export default Button;
