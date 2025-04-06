import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDTOTask, createDTOTask, updateDTOTask } from "src/api";
import { errorNotification, successNotification } from "src/components/Notifications";

//TODO export more data from mutations, we will need error, data, isFetching...

const useQueryTasks = () => {
  const queryClient = useQueryClient();

  const showError = (error: Error) => errorNotification(error.message);

  const { mutate: deleteTask } = useMutation({
    mutationFn: deleteDTOTask,
    onError: showError,
    onSettled: data => {
      successNotification(data?.message || "Task Deleted", "task-deleted");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: createTask } = useMutation({
    mutationFn: (name: string) => createDTOTask(name),
    onError: showError,
    onSettled: data => {
      successNotification(data?.message || "Task Created", "task-created");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: updateTask } = useMutation({
    mutationFn: updateDTOTask,
    onError: showError,
    onSettled: data => {
      successNotification(data?.message || "Success!!!", "toggle-completed");
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
