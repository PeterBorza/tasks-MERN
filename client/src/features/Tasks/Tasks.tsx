import { useState } from "react";
import Task from "./Task";
import { Task as TaskType } from "./types";
import styled from "styled-components";
import Controls from "./Controls";
import { Options } from "./types";
import { useTasks } from "./useTasks";

const Tasks = () => {
  const { tasks, deleteTask, updateTask, createTask } = useTasks();
  const [selected, setSelected] = useState<Options>("all");

  const filter: Record<Options, TaskType[]> = {
    completed: tasks.filter(t => t.completed),
    todo: tasks.filter(t => !t.completed),
    all: tasks,
  };

  return (
    <Container>
      <Toolbar>
        <h3>Task Manager</h3>
        <Controls onCreate={createTask} selected={selected} setSelected={setSelected} />
      </Toolbar>
      <TaskContainer>
        {filter[selected].map(task => (
          <Task task={task} key={task.id} onDelete={deleteTask} onUpdate={updateTask} />
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
  flex-wrap: wrap;
  align-items: center;
`;

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  width: 100%;
  max-height: 60vh;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.green.default_dark} transparent;
`;

export default Tasks;
