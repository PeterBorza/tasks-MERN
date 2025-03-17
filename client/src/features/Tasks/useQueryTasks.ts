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

  const convertedTasks = (data: Response<TaskDTO[]>) =>
    data.result?.map(task => convertTask(task)) || [];

  const queryBySelect = (select: (data: Response<TaskDTO[]>) => Task[]) =>
    useQuery({
      queryKey: ["tasks"],
      queryFn: getAllDTOTasks,
      staleTime: 10 * 1000,
      select,
    });

  const tasksQuery = queryBySelect(data => convertedTasks(data));

  // const completedTasksQuery = queryBySelect(data =>
  //   convertedTasks(data).filter(task => task.completed)
  // );
  // const notCompletedTasksQuery = queryBySelect(data =>
  //   convertedTasks(data).filter(task => !task.completed)
  // );

  return {
    query: tasksQuery,
    deleteTask,
    createTask,
    updateTask,
    // completedTasksQuery,
    // notCompletedTasksQuery,
  };
};

export default useQueryTasks;
