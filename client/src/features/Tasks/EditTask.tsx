import { FC, useState } from "react";
import { Task, UpdatedTask } from "src/api";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { Modal } from "src/components/Modal";
import styled from "styled-components";

type Props = {
  onClose: () => void;
  task: Task;
  onUpdate: (task: UpdatedTask) => void;
};

const EditTask: FC<Props> = ({ task, onUpdate, onClose }) => {
  const [newTask, setNewTask] = useState(task.name);

  const handleUpdate = () => {
    onUpdate({ id: task.id, name: newTask });
    onClose();
  };

  const handleCancel = () => {
    onClose();
    setNewTask(task.name);
  };
  return (
    <Modal onClose={onClose}>
      <EditForm>
        <h1>Edit task</h1>
        <Input name="edit-task" value={newTask} onChange={setNewTask} />
        <ButtonGroup>
          <Button onClick={handleUpdate}>Submit</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonGroup>
      </EditForm>
    </Modal>
  );
};

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
  width: 100%;
  background-color: ${props => props.theme.colors.green.lightest};

  h1 {
    color: ${props => props.theme.colors.green.darker};
    margin-bottom: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  align-self: flex-end;
  margin-top: 16px;
`;

export default EditTask;
