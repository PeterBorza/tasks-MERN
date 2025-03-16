import styled from "styled-components";
import { TaskState, Task as TaskType } from "src/api";
import { Button } from "src/components/Button";

type Props = {
  task: TaskType;
  onDelete: (id: string) => void;
  onUpdate: (task: TaskType) => void;
};

const Task = ({ task: { id, name, completed }, onDelete, onUpdate }: Props) => {
  return (
    <TaskWrapper $completed={completed}>
      <Description>{name}</Description>
      <Delete onClick={() => onDelete(id)} type={completed ? "valid" : "warn"}>
        Delete
      </Delete>
      <Toggle
        $completed={completed}
        onClick={() => onUpdate({ id, name, completed: !completed })}
        type={completed ? "valid" : "warn"}
      >
        {completed ? TaskState.DONE : TaskState.TODO}
      </Toggle>
    </TaskWrapper>
  );
};

const TaskWrapper = styled.div<{ $completed: boolean }>`
  display: grid;
  grid-template:
    "task actions"
    "task actions" auto / 2fr auto;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid
    ${props =>
      props.$completed ? props.theme.colors.green.default_light : props.theme.colors.main};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: ${props =>
    props.$completed ? props.theme.colors.green.default_light : props.theme.colors.main};
`;

const Description = styled.p`
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
