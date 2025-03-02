export type Task = {
  id: string;
  name: string;
  completed: boolean;
};

export type TaskDTO = Omit<Task, "id"> & { _id: string };

export type Options = "completed" | "todo" | "all";

export enum TaskState {
  DONE = "DONE",
  TODO = "TO DO",
}
