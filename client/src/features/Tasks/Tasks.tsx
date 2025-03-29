import { useState } from "react";
import Task from "./Task";
import { FilterOptions, Task as TaskType } from "src/api";
import { Container, Title, Toolbar, Actions, TaskContainer } from "./Tasks.styles";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { RadioGroup } from "components/Radio";
import { Dropdown } from "components/Dropdown";
import useQueryTasks from "./useQueryTasks";
import { Spinner } from "src/components/Spinner";
import { warningNotification } from "src/components/Notifications";
import useFilteredTasks from "./useFilteredTasks";

const Tasks = () => {
  const {
    query: { data: tasks, isLoading, isError, error, refetch },
    deleteTask,
    createTask,
    updateTask,
  } = useQueryTasks();

  const { filterOption, setFilterOption, filteredTasks } = useFilteredTasks(tasks);
  const [task, setTask] = useState("");

  const handleCreateTask = () => {
    if (!task) return;
    createTask(task.trim());
    // if error coming back from create mutation, persist local state input value
    setTask("");
  };

  const handleDeleteTask = (task: TaskType) => {
    if (!task.completed) {
      warningNotification("Task is not completed!");
      return;
    }
    deleteTask(task.id);
  };

  const handleRefetch = () => {
    setFilterOption("ALL");
    refetch();
  };

  return (
    <Container>
      <Title>Task Manager</Title>
      <Toolbar>
        <Input
          name="task"
          value={task}
          onChange={setTask}
          onSubmit={handleCreateTask}
          placeHolder="Type here"
        />

        <Actions>
          <Button type={!task ? "disabled" : "valid"} onClick={handleCreateTask}>
            Create
          </Button>
          <Button onClick={handleRefetch}>Refresh</Button>
          <Dropdown label={`Filter: ${filterOption.toLowerCase()}`}>
            <RadioGroup
              options={Object.keys(FilterOptions)}
              selected={filterOption}
              onChange={setFilterOption}
              name="tasks"
            />
          </Dropdown>
        </Actions>
      </Toolbar>

      <TaskContainer>
        {isLoading && <Spinner />}
        {isError && <div>ERROR: {error?.message}</div>}
        {filteredTasks.map(task => (
          <Task
            task={task}
            key={task.id}
            onDelete={() => handleDeleteTask(task)}
            onUpdate={updateTask}
          />
        ))}
      </TaskContainer>
    </Container>
  );
};

export default Tasks;
