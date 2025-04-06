import { customAxios, Method } from "../axios";
import { Response } from "../response-types";
import { FetchTasksOptions, Task, TaskId, UpdatedTask } from "./types";

export const TASK_URL = "/api/tasks";

const getAllDTOTasks = async ({
  queryKey,
}: {
  queryKey: [string, FetchTasksOptions];
}): Promise<Response<Task[]>> => {
  const [, params] = queryKey;
  const sort = params ? `?sort=${params.sort}` : "";
  return (await customAxios<Response<Task[]>>(Method.GET, TASK_URL + sort)) ?? [];
};

const createDTOTask = async (name: string): Promise<Response<Task>> =>
  await customAxios<Response<Task>, { name: string }>(Method.POST, TASK_URL, { name });

const deleteDTOTask = async (id: TaskId): Promise<Response> =>
  await customAxios<Response, TaskId>(Method.DELETE, `${TASK_URL}/${id}`);

const getSingleDTOTask = async (id: TaskId): Promise<Response<Task>> =>
  await customAxios<Response<Task>, TaskId>(Method.GET, `${TASK_URL}/${id}`);

const updateDTOTask = async (task: UpdatedTask): Promise<Response<Task>> =>
  await customAxios<Response<Task>, UpdatedTask>(Method.PATCH, `${TASK_URL}/${task.id}`, task);

export { getAllDTOTasks, deleteDTOTask, updateDTOTask, createDTOTask, getSingleDTOTask };
