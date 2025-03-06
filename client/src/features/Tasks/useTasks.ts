import { useEffect, useState } from "react";
import { Task, TaskDTO } from "./types";
import { axiosAPI, TASKS } from "src/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const convertTask = ({ _id: id, name, completed }: TaskDTO): Task => ({
    id,
    name,
    completed,
  });

  const getAsyncTasks = async (params?: { [key: string]: string | boolean }) => {
    try {
      const { data } = await axiosAPI.get(TASKS, { params });
      setTasks(data.tasks.map(convertTask));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axiosAPI.delete(`${TASKS}/${id}`);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (error) {
      console.log((error as unknown as Error).message);
    }
  };

  const updateTask = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      await axiosAPI.patch(`${TASKS}/${id}`, {
        completed: !task.completed,
      });
      setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (value: string) => {
    try {
      const {
        data: { task },
      } = await axiosAPI.post(TASKS, { name: value });

      setTasks(prev => [...prev, convertTask(task)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) getAsyncTasks();
  }, [tasks]);

  return {
    tasks,
    setTasks,
    createTask,
    getAsyncTasks,
    deleteTask,
    updateTask,
  };
};
