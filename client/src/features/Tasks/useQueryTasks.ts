import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { deleteDTOTask, getAllDTOTasks, convertTask, createDTOTask, updateDTOTask } from "src/api";
import { errorNotification, successNotification } from "src/components/Notifications";

const useQueryTasks = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation({
    mutationFn: deleteDTOTask,
    onError: error => {
      errorNotification(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: createTask } = useMutation({
    mutationFn: (name: string) => createDTOTask(name),
    onError: error => {
      errorNotification(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: updateTask } = useMutation({
    mutationFn: updateDTOTask,
    onError: error => {
      errorNotification(error.message);
    },
    onSettled: data => {
      successNotification(data?.message || "Success!!!");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const query = useSuspenseQuery({
    queryKey: ["tasks"],
    queryFn: getAllDTOTasks,
    staleTime: 10 * 1000,
    select: data => data.result?.map(convertTask) || [],
  });

  return {
    query,
    deleteTask,
    createTask,
    updateTask,
  };
};

export default useQueryTasks;
