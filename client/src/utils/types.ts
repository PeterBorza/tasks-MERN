export type Task = {
  id: string;
  name: string;
  completed: boolean;
};

export type TaskDTO = Omit<Task, "id"> & { _id: string };
