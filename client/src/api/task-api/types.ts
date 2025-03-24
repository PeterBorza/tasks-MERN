export type TaskDTO = {
  _id: string;
  __v: number;
  name: string;
  completed: boolean;
};

export type Task = Omit<TaskDTO, "_id" | "__v"> & { id: string };

export type Options = "completed" | "todo" | "all";

export enum TaskState {
  DONE = "DONE",
  TODO = "TO DO",
}
