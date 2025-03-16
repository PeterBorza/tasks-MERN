import mongoose from "mongoose";

const category = ["food", "drinks", "non-food"];
const type = {
  food: ["vegetables", "meat", "dairy", "bakery", "condiments"],
  drinks: ["beer", "wine", "juice", "alcohol"],
  "non-food": ["kitchen", "electronics", "furniture", "bathroom"],
};

const item = {
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
    maxLength: [30, "name cannot be longer than 30 characters"],
  },
  image: {
    type: String,
    default: "",
  },
  measure: {
    type: String,
    enum: ["kg", "pcs", "ltrs", "mtrs"],
    default: "pcs",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    default: 0,
  },
  urgent: {
    type: Boolean,
    default: false,
  },
  market: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    enum: category,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return type[this.category]?.includes(value);
      },
      message: props =>
        `${props.value} is not a valid type for the selected category`,
    },
  },
  acquired: {
    type: Boolean,
    default: false,
  },
};

const ShoppingItemSchema = new mongoose.Schema(item);

export default mongoose.model("ShoppingItem", ShoppingItemSchema);
