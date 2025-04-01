import { customAxios, Method } from "../axios";
import { Response } from "../response-types";
import { FetchTasksOptions, Task, TaskDTO } from "./types";

export const TASK_URL = "/api/tasks";

const getAllDTOTasks = async ({
  queryKey,
}: {
  queryKey: [string, FetchTasksOptions];
}): Promise<Response<TaskDTO[]>> => {
  const [, params] = queryKey;
  const sort = params ? `?sort=${params.sort}` : "";
  return (await customAxios<Response<TaskDTO[]>>(Method.GET, TASK_URL + sort)) ?? [];
};

const createDTOTask = async (name: string): Promise<Response<TaskDTO>> =>
  await customAxios<Response<TaskDTO>, { name: string }>(Method.POST, TASK_URL, { name });

const deleteDTOTask = async (id: string): Promise<Response> =>
  await customAxios<Response, string>(Method.DELETE, `${TASK_URL}/${id}`);

const updateDTOTask = async (task: Task): Promise<Response<TaskDTO>> =>
  await customAxios<Response<TaskDTO>, Task>(Method.PATCH, `${TASK_URL}/${task.id}`, task);

export { getAllDTOTasks, deleteDTOTask, updateDTOTask, createDTOTask };
