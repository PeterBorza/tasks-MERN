import { Dispatch, SetStateAction } from "react";
import { Options } from "src/api";
import styled from "styled-components";

type Props = {
  options: string[];
  selected: string;
  name: string;
  onChange: Dispatch<SetStateAction<Options>>;
};

const RadioGroup = ({ options, selected, name, onChange }: Props) => {
  return (
    <StyledRadioGroup>
      {options.map(option => (
        <Radio key={option}>
          <label htmlFor={option}>{option}</label>
          <input
            id={option}
            type="radio"
            checked={option === selected}
            name={name}
            value={option}
            onChange={() => onChange(option as Options)}
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
  gap: 0.2rem;
`;

const Radio = styled.div`
  label {
    margin-right: 0.2rem;
  }
`;

export default RadioGroup;
