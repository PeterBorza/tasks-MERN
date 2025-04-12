import Task from "../models/Task.js";
import { createCustomError } from "../errors/custom-error.js";

const getConvertedTask = task => ({
  id: task._id,
  name: task.name,
  completed: task.completed,
});

const createTask = async (req, res, next) => {
  const { name } = req.body;

  const forbiddenChars = /[<>]/;

  if (forbiddenChars.test(name)) {
    next(createCustomError("Not allowed characters", 400));
    return;
  }

  const task = await Task.create(req.body);

  return res.status(201).json({
    result: getConvertedTask(task),
    message: "Task created",
  });
};

const getAllTasks = async (req, res) => {
  const { sort } = req.query;

  let result = Task.find({});

  if (sort === "COMPLETED") {
    result = result.sort("-completed");
  }

  if (sort === "TODO") {
    result = result.sort("completed");
  }

  const tasks = await result;

  const response = tasks.map(getConvertedTask);

  res.json({ result: response, count: tasks.length });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return res.json({
      result: null,
      message: "Task not found",
    });
  }

  res.json({ message: "Deleted Successfully" });
};

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;

  if (!req.body) {
    return res.json({
      result: getConvertedTask(task),
      message: "No update was made",
    });
  }
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.json({
      result: null,
      message: "Task not found",
    });
  }

  res.json({
    result: getConvertedTask(task),
    message: "Updated Successfully",
  });
};

const getSingleTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });

  if (!task) {
    return res.json({
      result: null,
      message: "Task not found",
    });
  }

  res.json({ result: getConvertedTask(task) });
};

export { createTask, getAllTasks, deleteTask, updateTask, getSingleTask };
