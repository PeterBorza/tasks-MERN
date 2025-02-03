import Task from "../models/Task.js";
import { createCustomError } from "../errors/custom-error.js";
import "express-async-errors";

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find(req.query).sort("name");
  res.status(200).json({ tasks });
};

const deleteTask = async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    createCustomError("Task not found", 404);
  }

  res.status(200).json({ task: null, status: "Success" });
};

const updateTask = async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    createCustomError("Task not found", 404);
  }

  res.status(200).json({ task });
};

const getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    createCustomError("Task not found", 404);
  }

  res.status(200).json({ task });
};

export { createTask, getAllTasks, deleteTask, updateTask, getTask };
