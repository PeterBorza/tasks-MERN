import { TaskDTO, Task } from "./types";

const convertTask = ({ _id: id, ...rest }: TaskDTO): Task => ({
  id,
  ...rest,
});

export { convertTask };
