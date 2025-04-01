import Task from "../models/Task.js";
import { RES_ERROR, RES_SUCCESS } from "../constants/status.js";
import { createCustomError } from "../errors/custom-error.js";

const createTask = async (req, res, next) => {
  const { name } = req.body;

  const forbiddenChars = /[<>]/;

  if (forbiddenChars.test(name)) {
    next(createCustomError("Not allowed characters", 400));
    return;
  }

  const task = await Task.create(req.body);

  return res
    .status(201)
    .json({ status: RES_SUCCESS, result: task, message: "Task created" });
};

const getAllTasks = async (req, res) => {

  const {sort} = req.query;

  let result = Task.find({});

  if (sort === 'COMPLETED') {
    result = result.sort('-completed')
  }

  if (sort === 'TODO') {
    result = result.sort('completed')
  }

  const tasks = await result;

  res.json({ status: RES_SUCCESS, result: tasks });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return res.json({
      status: RES_ERROR,
      result: null,
      message: "Task not found",
    });
  }

  res.json({ status: RES_SUCCESS, message: "Deleted Successfully" });
};

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.json({
      status: RES_ERROR,
      result: null,
      message: "Task not found",
    });
  }

  res.json({
    status: RES_SUCCESS,
    result: task,
    message: "Updated Successfully",
  });
};

const getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });

  if (!task) {
    return res.json({
      status: RES_ERROR,
      result: null,
      message: "Task not found",
    });
  }

  res.json({ status: RES_SUCCESS, result: task });
};

export { createTask, getAllTasks, deleteTask, updateTask, getTask };
