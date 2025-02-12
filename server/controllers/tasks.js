import Task from "../models/Task.js";
import { createCustomError } from "../errors/custom-error.js";
import "express-async-errors";
import { BadRequest } from "../errors/bad-request.js";

const createTask = async (req, res) => {
  const { name } = req.body;

  if (name) {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  }

  throw new BadRequest("Pleas provide a name for the task");
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find(req.query).sort("name");
  res.status(200).json({ tasks });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    createCustomError("Task not found", 404);
  }

  res.status(200).json({ status: "Success" });
};

const updateTask = async (req, res) => {
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
