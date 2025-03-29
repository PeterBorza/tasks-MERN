import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type Props<T> = {
  options: string[];
  selected: string;
  name: string;
  onChange: Dispatch<SetStateAction<T>>;
};

const RadioGroup = <T,>({ options, selected, name, onChange }: Props<T>) => {
  return (
    <StyledRadioGroup>
      {options.map(option => (
        <Radio key={option}>
          {option.toLowerCase()}
          <input
            id={option}
            type="radio"
            checked={option === selected}
            name={name}
            value={option}
            onChange={() => onChange(option as T)}
          />
        </Radio>
      ))}
    </StyledRadioGroup>
  );
};

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const Radio = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  input {
    align-self: center;
    &:checked {
      background-color: red;
    }
  }
`;

export default RadioGroup;
