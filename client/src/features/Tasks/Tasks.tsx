import { useState } from "react";
import Task from "./Task";
import { FilterOptions, Task as TaskType, FilterType } from "src/api";
import { Container, Title, Toolbar, Actions, TaskContainer } from "./Tasks.styles";
import { Button } from "components/Button";
import { RadioGroup } from "components/Radio";
import { Dropdown } from "components/Dropdown";
import useQueryTasks from "./useQueryTasks";
import { Spinner } from "src/components/Spinner";
import { warningNotification } from "src/components/Notifications";
import useFilteredTasks from "./useFilteredTasks";
import useTasks from "./useTasks";
import CreateTask from "./CreateTask";

const Tasks = () => {
  const [sort, setSort] = useState<FilterType>("ALL");
  const { data: tasks, isLoading, isError, error, refetch } = useTasks({ sort });
  const { deleteTask, createTask, updateTask } = useQueryTasks();

  const { filterOption, setFilterOption, filteredTasks } = useFilteredTasks(tasks);

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

  const canSort = filterOption === "ALL";

  return (
    <Container>
      <Title>Task Manager</Title>
      <Toolbar>
        <CreateTask onCreate={createTask} />

        <Actions>
          <Button onClick={handleRefetch}>Refresh</Button>
          <Dropdown label={`Filter: ${filterOption.toLowerCase()}`}>
            <RadioGroup
              options={Object.keys(FilterOptions)}
              selected={filterOption}
              onChange={setFilterOption}
              name="filter-tasks"
            />
          </Dropdown>
          {canSort && (
            <Dropdown label={`Sort: ${sort.toLowerCase()}`}>
              <RadioGroup
                options={Object.keys(FilterOptions)}
                selected={sort}
                onChange={setSort}
                name="sort-tasks"
              />
            </Dropdown>
          )}
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
