import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};
const Input = ({ name, value, onChange }: Props) => {
  return (
    <StyledInput
      name={name}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Add task"
      rows={2}
    />
  );
};

const StyledInput = styled.textarea`
  min-width: min(300px, 100%);
  padding: 4px 8px;
  line-height: 1.5;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

export default Input;
