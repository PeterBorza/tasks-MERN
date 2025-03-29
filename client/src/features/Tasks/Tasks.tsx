import { useState } from "react";
import Task from "./Task";
import { Task as TaskType, Options } from "src/api";
import styled from "styled-components";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { RadioGroup } from "components/Radio";
import { Dropdown } from "components/Dropdown";
import useQueryTasks from "./useQueryTasks";
import { Spinner } from "src/components/Spinner";

const Tasks = () => {
  const {
    query: { data, isLoading, isError, error, refetch },
    deleteTask,
    createTask,
    updateTask,
  } = useQueryTasks();

  const [selected, setSelected] = useState<Options>("all");
  const [task, setTask] = useState("");

  const filter: Record<Options, TaskType[]> = {
    completed: data?.filter(t => t.completed) || [],
    todo: data?.filter(t => !t.completed) || [],
    all: data || [],
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
          <Button onClick={handleCreateTask}>Add task</Button>
          <Button onClick={refetch}>Refresh</Button>
          <Dropdown label={`Filter: ${selected}`}>
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
        {isLoading && <Spinner />}
        {isError && <div>ERROR: {error?.message}</div>}
        {data &&
          filter[selected].map(task => (
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
