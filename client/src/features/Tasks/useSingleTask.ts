import { useSuspenseQuery } from "@tanstack/react-query";
import { getSingleDTOTask, TaskId } from "src/api";

const useSingleTask = (taskId: TaskId) => {
  const singleTask = useSuspenseQuery({
    queryKey: ["task", taskId],
    queryFn: () => getSingleDTOTask(taskId),
    staleTime: 10 * 1000,
    select: data => data.result,
  });

  return singleTask;
};

export default useSingleTask;
