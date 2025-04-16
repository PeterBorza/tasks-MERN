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
});

const ShoppingItem =
  mongoose.models.ShoppingItem || mongoose.model("ShoppingItem", itemSchema);

export default ShoppingItem;
