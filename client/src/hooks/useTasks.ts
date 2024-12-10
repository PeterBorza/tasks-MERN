import axios from "axios";
import { useEffect, useState } from "react";
import { Task, TaskDTO } from "../utils";

const BASE_URL = "http://localhost:8080/api/tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const getAsyncTasks = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      setTasks(
        (data.tasks as TaskDTO[]).map(
          task =>
            ({
              ...task,
              id: task._id,
            } as Task)
        )
      );
    } catch (error) {
      console.log((error as unknown as Error).message);
    }
  };

  useEffect(() => {
    getAsyncTasks();
  }, []);

  return { tasks, setTasks };
};
