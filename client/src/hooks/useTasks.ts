import axios from "axios";
import { useEffect, useState } from "react";
import { Task, TaskDTO } from "../utils";

export const useTasks = () => {
  const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_BASE_URI
    : import.meta.env.VITE_PROD_URI;

  const tasksURL = BASE_URL + "/api/tasks";

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task | undefined>();

  const getAsyncTasks = async (params?: { [key: string]: string }) => {
    try {
      const { data } = await axios.get(tasksURL, { params });
      setTasks((data.tasks as TaskDTO[]).map(task => ({ ...task, id: task._id }) as Task));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`${tasksURL}/${id}`);
      setTasks(prev => prev.filter(task => task.id !== id));
      if (selected?.id === id) {
        setSelected(undefined);
      }
    } catch (error) {
      console.log((error as unknown as Error).message);
    }
  };

  const getSingleTask = async (id: string) => {
    try {
      const { data } = await axios.get(`${tasksURL}/${id}`);
      setSelected(data.task);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      const { data } = await axios.patch(`${tasksURL}/${id}`, {
        completed: !task.completed,
      });
      setSelected(data.task);
      setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) getAsyncTasks();
  }, [tasks]);

  return {
    tasks,
    selected,
    setSelected,
    setTasks,
    getAsyncTasks,
    deleteTask,
    getSingleTask,
    updateTask,
  };
};
