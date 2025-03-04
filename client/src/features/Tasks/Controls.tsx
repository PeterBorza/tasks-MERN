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
      <RadioGroup
        options={["completed", "todo", "all"]}
        selected={selected}
        onChange={setSelected}
        name="tasks"
      />
      <Button label="Add task" onClick={handleCreateTask} />
    </StyledControls>
  );
};

const StyledControls = styled.div`
  width: 50%;
`;

export default Controls;
