import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  onSubmit?: () => void;
  placeHolder?: string;
};
const Input = ({ name, value, onChange, onSubmit, placeHolder }: Props) => {
  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSubmit?.();
  };
  return (
    <StyledInput
      name={name}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeHolder}
      rows={2}
      onKeyDown={handleKeydown}
    />
  );
};

const StyledInput = styled.textarea`
  width: 100%;
  padding: 4px 8px;
  line-height: 1.5;
  font-size: ${props => props.theme.fontSize.md};
  border: none;
  outline: none;
  border-radius: 4px;
  resize: none;
`;

export default Input;
