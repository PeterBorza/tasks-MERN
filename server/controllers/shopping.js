// import { BadRequestError } from "../errors/bad-request.js";
import ShoppingItem from "../models/ShoppingItem.js";

const getAllShoppingItems = async (_req, res) => {
  const items = await ShoppingItem.find({});

  // throw new Error("Error");

  res.json({ result: items, count: items.length });
};

const getSingleShoppingItem = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await ShoppingItem.find({ _id: itemId });

  if (!item) {
    // throw new BadRequestError("Cannot find item with id: " + itemId);
    return res.json({
      message: `Cannot find item with id: ${itemId}`,
      result: [],
    });
  }

  res.json({ result: item });
};

const updateShoppingItem = async (req, res) => {
  const { id: itemId } = req.params;

  const item = await ShoppingItem.findOneAndUpdate({ _id: itemId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    // throw new BadRequestError("Cannot find item with id: " + itemId);
    return res.json({
      message: `Cannot find item with id: ${itemId}`,
      result: [],
    });
  }

  res.json({ result: item, message: "Update Success" });
};

const deleteShoppingItem = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await ShoppingItem.findOneAndDelete({ _id: itemId });

  if (!item) {
    // throw new BadRequestError("Cannot find item with id: " + itemId);
    return res.json({
      message: `Cannot find item with id: ${itemId}`,
      result: [],
    });
  }

  res.json({ message: "Deleted Successfully" });
};

const createShoppingItem = async (req, res) => {
  const item = await ShoppingItem.create(req.body);

  res.status(201).json({ message: "Created", result: item });
};

export {
  getAllShoppingItems,
  getSingleShoppingItem,
  updateShoppingItem,
  deleteShoppingItem,
  createShoppingItem,
};
