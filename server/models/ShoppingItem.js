import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
    maxLength: [50, "Name cannot be longer than 50 characters"],
  },
  image: {
    type: String,
    default: "",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  details: {
    type: String,
    trim: true,
    default: "",
    maxLength: [50, "Name cannot be longer than 50 characters"],
  },
});

const ShoppingItem =
  mongoose.models.ShoppingItem || mongoose.model("ShoppingItem", itemSchema);

export default ShoppingItem;
