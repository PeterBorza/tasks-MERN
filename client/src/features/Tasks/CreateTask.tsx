import { FC, useState } from "react";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import styled from "styled-components";

type Props = {
  onCreate: (task: string) => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: min(400px, 100%);
`;

const CreateTask: FC<Props> = ({ onCreate }) => {
  const [task, setTask] = useState("");

  const invalidTask = task.trim() === "";

  const handleCreateTask = () => {
    if (invalidTask) return;
    onCreate(task.trim());
    // If error coming back from create mutation, persist local state input value.
    // This will be solved when task creation is coming from separate hook.
    // We have access to isError. If it's true, we keep the state value here
    setTask("");
  };

  return (
    <Wrapper>
      <Input
        name="task"
        value={task}
        onChange={setTask}
        onSubmit={handleCreateTask}
        placeHolder="Type here"
      />
      <Button type={invalidTask ? "disabled" : "valid"} onClick={handleCreateTask}>
        Create
      </Button>
    </Wrapper>
  );
};

export default CreateTask;
