import styled, { useTheme } from "styled-components";
import { Task as TaskType, UpdatedTask } from "src/api";
import { Button } from "src/components/Button";
import { DeleteIcon, DoneIcon, ProgressIcon, EditIcon } from "src/icons";
import { useState } from "react";
import EditTask from "./EditTask";

type Props = {
  task: TaskType;
  onDelete: (id: string) => void;
  onUpdate: (task: UpdatedTask) => void;
};

const Task = ({ task, onDelete, onUpdate }: Props) => {
  const { id, name, completed } = task;
  const theme = useTheme();
  const [editTask, setEditTask] = useState<TaskType | undefined>();
  return (
    <>
      <TaskWrapper $completed={completed}>
        <Description>{name}</Description>

        <Actions>
          <Button
            onClick={() => onDelete(id)}
            type={completed ? "valid" : "warn"}
            title="Delete task"
          >
            <DeleteIcon color={theme.colors.error} />
          </Button>
          <Button
            onClick={() => onUpdate({ id, completed: !completed })}
            type={completed ? "valid" : "warn"}
            title={completed ? "Mark as to do" : "Check as completed"}
          >
            {completed ? (
              <DoneIcon color={theme.colors.green.light} />
            ) : (
              <ProgressIcon color={theme.colors.green.darkest} />
            )}
          </Button>
          <Button
            onClick={() => setEditTask(task)}
            type={completed ? "valid" : "warn"}
            title="Edit task"
          >
            <EditIcon color={theme.colors.dark} />
          </Button>
        </Actions>
      </TaskWrapper>
      {editTask && (
        <EditTask onClose={() => setEditTask(undefined)} task={task} onUpdate={onUpdate} />
      )}
    </>
  );
};

const TaskWrapper = styled.div<{ $completed: boolean }>`
  display: flex;
  padding: 4px;
  border: 1px solid
    ${props =>
      props.$completed ? props.theme.colors.green.default_light : props.theme.colors.main};
  box-shadow: 0px 0px 10px
    ${props =>
      props.$completed ? props.theme.colors.green.default_light : props.theme.colors.main};
  border-radius: 4px;
  background-color: ${props =>
    props.$completed ? props.theme.colors.green.default_light : props.theme.colors.main};
`;

const Description = styled.p`
  width: 100%;
  padding: 4px;
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default Task;
