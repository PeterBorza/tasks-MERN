const mongoose = require("mongoose");

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

module.exports = mongoose.model("Task", TaskSchema);
