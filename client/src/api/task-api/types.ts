export type Task = {
  id: string;
  name: string;
  completed: boolean;
};

export type TaskId = Task["id"];

export type UpdatedTask = Pick<Task, "id"> & Partial<Omit<Task, "id">>;

export const FilterOptions = {
  COMPLETED: "completed",
  TODO: "todo",
  ALL: "all",
} as const;

export type FilterType = keyof typeof FilterOptions;

export type FetchTasksOptions = {
  sort: FilterType;
};
