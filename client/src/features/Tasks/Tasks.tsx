import { useState } from "react";
import Task from "./Task";
import { Task as TaskType } from "./types";
import styled from "styled-components";
import { Options } from "./types";
import { useTasks } from "./useTasks";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { RadioGroup } from "components/Radio";
import { Dropdown } from "components/Dropdown";

const Tasks = () => {
  const { tasks, deleteTask, updateTask, createTask, getAsyncTasks } = useTasks();
  const [selected, setSelected] = useState<Options>("all");
  const [task, setTask] = useState("");

  const filter: Record<Options, TaskType[]> = {
    completed: tasks.filter(t => t.completed),
    todo: tasks.filter(t => !t.completed),
    all: tasks,
  };

  const handleCreateTask = () => {
    if (!task) return;
    createTask(task.trim());
    setTask("");
  };

  return (
    <Container>
      <Toolbar>
        <h3>Task Manager</h3>
        <Input name="task" value={task} onChange={setTask} />

        <Actions>
          <Button label="Add task" onClick={handleCreateTask} />
          <Button label="Refresh" onClick={getAsyncTasks} />
          <Dropdown label="Filter">
            <RadioGroup
              options={["completed", "todo", "all"]}
              selected={selected}
              onChange={setSelected}
              name="tasks"
            />
          </Dropdown>
        </Actions>
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
  margin: auto;
  width: max(320px, 80%);
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 8px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  padding-top: 1rem;
  overflow: auto;
  max-height: 60vh;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.green.default_dark} transparent;
`;

export default Tasks;
