const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getAllTasks = asyncWrapper(async (_req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return next(createCustomError("Task not found", 404));
  }

  res.status(200).json({ task: null, status: "Success" });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError("Task not found", 404));
  }

  res.status(200).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }

  res.status(200).json({ task });
});

module.exports = { createTask, getAllTasks, deleteTask, updateTask, getTask };
