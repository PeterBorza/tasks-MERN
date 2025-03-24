import { TaskDTO, Task } from "./types";

const convertTask = ({ _id: id, __v, ...rest }: TaskDTO): Task => ({
  id,
  ...rest,
});

export { convertTask };
