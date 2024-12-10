import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useTasks } from "./hooks/useTasks";
import { Task } from "./utils";

const BASE_URL = "http://localhost:8080/api/tasks";

function App() {
  const [selected, setSelected] = useState<Task | undefined>();
  const { tasks, setTasks } = useTasks();

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
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
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setSelected(data.task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Task Manager</h2>
      <h3>{selected?.name}</h3>

      <ul>
        {tasks.map(task => (
          <div key={task.id} className="taskWrapper">
            <li className="taskItem">{task.name}</li>
            <span>Completed: {task.completed ? "TRUE" : "FALSE"}</span>
            <span>ID: {task.id}</span>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
            <button onClick={() => getSingleTask(task.id)}>
              Highlight Task
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
