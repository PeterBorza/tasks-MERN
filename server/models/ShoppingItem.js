import mongoose from "mongoose";

const item = {
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
    maxLength: [50, "name cannot be longer than 50 characters"],
  },
  image: {
    type: String,
    default: "",
  },
  quantity: {
    type: Number,
    default: 1
  },
  acquired: {
    type: Boolean,
    default: false,
  },
  details: {
  type: String,
  trim: true,
  default: "",
  maxLength: [50, "name cannot be longer than 50 characters"],
  }
};

const ShoppingItemSchema = new mongoose.Schema(item);

export default mongoose.model("ShoppingItem", ShoppingItemSchema);
