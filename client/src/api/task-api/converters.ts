import { TaskDTO, Task } from "./types";

const convertTask = (task: TaskDTO): Task => ({
  id: task._id,
  name: task.name,
  completed: task.completed,
});

export { convertTask };
