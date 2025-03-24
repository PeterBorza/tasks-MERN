import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteDTOTask,
  getAllDTOTasks,
  convertTask,
  createDTOTask,
  updateDTOTask,
  Response,
  TaskDTO,
  Task,
} from "src/api";

const useQueryTasks = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation({
    mutationFn: deleteDTOTask,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: createTask } = useMutation({
    mutationFn: createDTOTask,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: updateTask } = useMutation({
    mutationFn: updateDTOTask,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllDTOTasks,
    staleTime: 10 * 1000,
    select: data => data.result?.map(task => convertTask(task)) || [],
  });

  return {
    query,
    deleteTask,
    createTask,
    updateTask,
  };
};

export default useQueryTasks;
