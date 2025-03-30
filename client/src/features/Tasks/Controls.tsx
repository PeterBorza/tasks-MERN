import styled from "styled-components";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { RadioGroup } from "src/components/Radio";
import { Dispatch, SetStateAction, useState } from "react";
import { FilterType } from "src/api";

type Props = {
  onCreate: (task: string) => void;
  selected: FilterType;
  setSelected: Dispatch<SetStateAction<FilterType>>;
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
      <Button onClick={handleCreateTask}>Add task</Button>
    </StyledControls>
  );
};

const StyledControls = styled.div`
  width: 50%;
`;

export default Controls;
