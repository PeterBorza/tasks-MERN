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
  width: min(250px, 100%);
  padding: 8px;
  line-height: 1.5;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 4px;
`;

export default Input;
