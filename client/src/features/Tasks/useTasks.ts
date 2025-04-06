import { useSuspenseQuery } from "@tanstack/react-query";
import { FetchTasksOptions, getAllDTOTasks } from "src/api";

const useTasks = (options: FetchTasksOptions) => {
  const tasks = useSuspenseQuery({
    queryKey: ["tasks", options],
    queryFn: getAllDTOTasks,
    staleTime: 10 * 1000,
    select: data => data.result || [],
  });

  return tasks;
};

export default useTasks;
