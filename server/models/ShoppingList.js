import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema(
  {
    creator: {
      type: String,
      enum: ["Mihaela", "Peter", "Mirela"],
      required: true,
    },
    items: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ShoppingItem",
          required: true,
        },
        acquired: {
          type: Boolean,
          default: false,
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
      },
    ],
    resolved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ShoppingList =
  mongoose.models.ShoppingList ||
  mongoose.model("ShoppingList", shoppingListSchema);

export default ShoppingList;
