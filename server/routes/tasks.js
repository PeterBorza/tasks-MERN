import express from "express";

import {
  getAllTasks,
  getSingleTask,
  deleteTask,
  updateTask,
  createTask,
} from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

export default router;
