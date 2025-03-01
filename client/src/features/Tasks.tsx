import React from "react";
import { useTasks } from "../hooks";
import Task from "./Task";
import styled from "styled-components";

const Tasks = () => {
  const { tasks, selected, deleteTask, getSingleTask, getAsyncTasks, updateTask } = useTasks();
  9;
  const getAllTasks = () => getAsyncTasks();

  const getCompletedTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    getAsyncTasks({ completed: e.target.checked });
  };
  return (
    <Container>
      <Toolbar>
        <h3>Task Manager:</h3>
        <h3>{selected?.name}</h3>
        <Controls>
          <Label htmlFor="completed">Get completed</Label>
          <Check id="completed" type="checkbox" onChange={getCompletedTasks} />

          <Button onClick={getAllTasks}>Get All tasks</Button>
          <Button onClick={getAllTasks}>Add</Button>
        </Controls>
      </Toolbar>
      <TaskContainer>
        {tasks.map(task => (
          <TaskWrapper key={task.id}>
            <Task name={task.name} completed={task.completed} />
            <ButtonWrapper>
              <Button onClick={() => deleteTask(task.id)}>Delete Task</Button>
              <Button onClick={() => getSingleTask(task.id)}>Highlight Task</Button>
              <Button onClick={() => updateTask(task.id)}>Toggle Completed</Button>
            </ButtonWrapper>
          </TaskWrapper>
        ))}
      </TaskContainer>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  gap: 1rem;
`;

const Toolbar = styled.div`
  width: 100%;
  padding: 0.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
`;

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  width: 100%;
  max-height: 60vh;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.green.default_dark} transparent;
`;

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.green.default_light};
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  flex: 1;
`;

const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.green.darker};
  border-radius: 4px;
  border: 1px solid transparent;
  &:hover {
    border-color: ${props => props.theme.colors.green.light};
    transition: border-color 200ms;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

const Controls = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-inline: 0.5rem;
  gap: 0.5rem;

  & button {
    margin-left: auto;
  }
`;

const Check = styled.input`
  all: unset;
  width: 12px;
  height: 12px;
  border: 1px solid ${props => props.theme.colors.green.default_dark};
  border-radius: 4px;
  margin-left: 4px;
  cursor: pointer;
  &:checked {
    background-color: ${props => props.theme.colors.green.default_dark};
  }
`;

export default Tasks;
