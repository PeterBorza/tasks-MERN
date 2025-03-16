import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteDTOTask, getAllDTOTasks } from "src/api";
import { convertTask } from "src/api/task-api/converters";

const useQueryTasks = () => {
  const deleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: deleteDTOTask,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
    });
  };

  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllDTOTasks,
  });

  const tasks = query.data?.result?.map(task => convertTask(task)) ?? [];

  return { query: { ...query, data: { ...query.data, result: tasks } }, deleteTask };
};

export default useQueryTasks;
