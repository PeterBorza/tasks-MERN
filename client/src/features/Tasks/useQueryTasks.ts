import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDTOTask, createDTOTask, updateDTOTask } from "src/api";
import { errorNotification, successNotification } from "src/components/Notifications";

//TODO export more data from mutations, we will need error, data, isFetching...

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

  return {
    deleteTask,
    createTask,
    updateTask,
  };
};

export default useQueryTasks;
