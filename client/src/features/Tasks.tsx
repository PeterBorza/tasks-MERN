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
      <Title>Task Manager</Title>
      <h3>{selected?.name}</h3>
      <Controls>
        <Label htmlFor="completed">Get completed</Label>
        <Check id="completed" type="checkbox" onChange={getCompletedTasks} />

        <Button onClick={getAllTasks}>Get All tasks</Button>
      </Controls>
      <TasksContainer>
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
      </TasksContainer>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
`;

const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  height: 60vh;
  width: 60%;
  scrollbar-width: thin;
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.green.default_light};
  border-radius: 4px;
  height: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

const Button = styled.button`
  display: block;
  padding: 8px 12px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.green.darker};
  border-radius: 4px;
  border: 1px solid transparent;
  &:hover {
    border-color: ${props => props.theme.colors.green.light};
    transition: border-color 200ms;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  max-width: 50%;

  & button {
    margin-left: auto;
  }
`;

const Label = styled.label`
  cursor: pointer;
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
