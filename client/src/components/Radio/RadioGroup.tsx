import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Options } from "../../features/Tasks/Tasks";

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
        <Radio>
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
  gap: 1rem;
`;

const Radio = styled.div`
  label {
    margin-right: 0.2rem;
  }
`;

export default RadioGroup;
