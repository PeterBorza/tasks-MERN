import { useEffect, useState } from "react";
import { Task, TaskDTO } from "../utils";
import { AXIOS, TASKS } from "../constants";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task | undefined>();

  const getAsyncTasks = async (params?: { [key: string]: string | boolean }) => {
    try {
      const { data } = await AXIOS.get(TASKS, { params });
      setTasks((data.tasks as TaskDTO[]).map(task => ({ ...task, id: task._id }) as Task));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await AXIOS.delete(`${TASKS}/${id}`);
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
      const { data } = await AXIOS.get(`${TASKS}/${id}`);
      setSelected(data.task);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      await AXIOS.patch(`${TASKS}/${id}`, {
        completed: !task.completed,
      });
      setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
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
