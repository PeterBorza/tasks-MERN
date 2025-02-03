import mongoose from "mongoose";

const task = {
  name: {
    type: String,
    trim: true,
    required: [true, "must provide a name"],
    maxlength: [50, "name cannot be longer than 50 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
};

const TaskSchema = new mongoose.Schema(task);

export default mongoose.model("Task", TaskSchema);
