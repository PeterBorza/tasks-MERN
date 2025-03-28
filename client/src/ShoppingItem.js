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
  acquired: {
    type: Boolean,
    default: false,
  },
  details: {
  type: String,
  required: [true, "Please give detail for this item"],
  maxLength: [50, "name cannot be longer than 50 characters"],
  }
};

const ShoppingItemSchema = new mongoose.Schema(item);

export default mongoose.model("ShoppingItem", ShoppingItemSchema);
