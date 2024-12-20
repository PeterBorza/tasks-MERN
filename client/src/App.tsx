import "./App.css";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, selected, deleteTask, getSingleTask, getAsyncTasks, updateTask } = useTasks();

  const getAllTasks = () => getAsyncTasks();

  return (
    <>
      <h2>Task Manager</h2>
      <h3>{selected?.name}</h3>
      <label htmlFor="completed">Get completed</label>
      <input
        id="completed"
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getAsyncTasks({ completed: e.target.checked.toString() });
        }}
      />
      <button onClick={getAllTasks}>Get All tasks</button>

      <ul>
        {tasks.map(task => (
          <div key={task.id} className="taskWrapper">
            <li className="taskItem">{task.name}</li>
            <span>Completed: {task.completed?.toString()}</span>
            <span>ID: {task.id}</span>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
            <button onClick={() => getSingleTask(task.id)}>Highlight Task</button>
            <button onClick={() => updateTask(task.id)}>Toggle Completed</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
