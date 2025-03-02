import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RadioGroup } from "../../components/Radio";
import { Dispatch, SetStateAction, useState } from "react";
import { Options } from "./types";

type Props = {
  onCreate: (task: string) => void;
  selected: Options;
  setSelected: Dispatch<SetStateAction<Options>>;
};

const Controls = ({ onCreate, selected, setSelected }: Props) => {
  const [task, setTask] = useState("");

  const handleCreateTask = () => {
    if (!task) return;
    onCreate(task.trim());
    setTask("");
  };
  return (
    <StyledControls>
      <Input name="task" value={task} onChange={setTask} />
      <Button label="Add task" onClick={handleCreateTask} />
      <RadioGroup
        options={["completed", "todo", "all"]}
        selected={selected}
        onChange={setSelected}
        name="tasks"
      />
    </StyledControls>
  );
};

const StyledControls = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-inline: 0.5rem;
  gap: 0.5rem;

  & button {
    margin-left: auto;
  }
`;

export default Controls;
