import styled from "styled-components";
import { TaskState, Task as TaskType } from "./types";
import { Button } from "../../components/Button";

type Props = {
  task: TaskType;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
};

const Task = ({ task: { id, name, completed }, onDelete, onUpdate }: Props) => {
  return (
    <TaskWrapper>
      <TaskName>{name}</TaskName>
      <Delete onClick={() => onDelete(id)} label="Delete" />
      <Toggle
        $completed={completed}
        onClick={() => onUpdate(id)}
        label={completed ? TaskState.DONE : TaskState.TODO}
      />
    </TaskWrapper>
  );
};

const TaskWrapper = styled.div`
  display: grid;
  grid-template:
    "task actions"
    "task actions" auto / 2fr auto;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.green.default_light};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

const TaskName = styled.p`
  grid-area: task;
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Delete = styled(Button)`
  grid-area: actions;
`;

const Toggle = styled(Button)<{ $completed: boolean }>`
  grid-area: actions;
  background-color: ${props => (props.$completed ? "green" : "red")};
`;

export default Task;
