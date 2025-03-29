export type TaskDTO = {
  _id: string;
  __v: number;
  name: string;
  completed: boolean;
};

export type Task = Omit<TaskDTO, "_id" | "__v"> & { id: string };

export const FilterOptions = {
  COMPLETED: "completed",
  TODO: "todo",
  ALL: "all",
} as const;

export type FilterType = keyof typeof FilterOptions;

export enum TaskState {
  DONE = "DONE",
  TODO = "TO DO",
}
