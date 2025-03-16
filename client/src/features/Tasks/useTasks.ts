import { useEffect, useState } from "react";
import { deleteDTOTask, updateDTOTask, Task, getAllDTOTasks, createDTOTask } from "src/api";
import { convertTask } from "src/api/task-api/converters";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getAsyncTasks = async () => {
    const { result } = await getAllDTOTasks();

    setTasks(result!.map(convertTask));
  };

  const deleteTask = async (id: string) => {
    try {
      const { message } = await deleteDTOTask(id);
      console.log(message);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (error) {
      console.log((error as unknown as Error).message);
    }
  };

  const updateTask = async (task: Task) => {
    try {
      const { result } = await updateDTOTask(task);

      if (result) {
        const task = convertTask(result);
        setTasks(prev => prev.map(t => (t.id === task.id ? task : t)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (value: string) => {
    try {
      const { result } = await createDTOTask(value);

      if (result) setTasks(prev => [...prev, convertTask(result)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAsyncTasks();
  }, []);

  return {
    tasks,
    setTasks,
    createTask,
    getAsyncTasks,
    deleteTask,
    updateTask,
  };
};
