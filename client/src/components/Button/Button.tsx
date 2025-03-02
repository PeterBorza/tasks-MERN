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
  &:hover {
    border-color: ${props => props.theme.colors.green.light};
    transition: border-color 200ms;
  }
`;

export default Button;
