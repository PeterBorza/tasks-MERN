// import { BadRequestError } from "../errors/bad-request.js";
import { RES_ERROR, RES_SUCCESS } from "../constants/status.js";
import ShoppingItem from "../models/ShoppingItem.js";

const getAllShoppingItems = async (_req, res) => {
  const items = await ShoppingItem.find({});

  // throw new Error("Error");

  res.json({ status: RES_SUCCESS, result: items, count: items.length });
};

const getSingleShoppingItem = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await ShoppingItem.find({ _id: itemId });

  if (!item) {
    // throw new BadRequestError("Cannot find item with id: " + itemId);
    return res.json({
      status: RES_ERROR,
      message: `Cannot find item with id: ${itemId}`,
      result: [],
    });
  }

  res.json({ status: RES_SUCCESS, result: item });
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
      status: RES_ERROR,
      message: `Cannot find item with id: ${itemId}`,
      result: [],
    });
  }

  res.json({ status: RES_SUCCESS, result: item, message: "Update Success" });
};

const deleteShoppingItem = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await ShoppingItem.findOneAndDelete({ _id: itemId });

  if (!item) {
    // throw new BadRequestError("Cannot find item with id: " + itemId);
    return res.json({
      status: RES_ERROR,
      message: `Cannot find item with id: ${itemId}`,
      result: [],
    });
  }

  res.json({ status: RES_SUCCESS, message: "Deleted Successfully" });
};

const createShoppingItem = async (req, res) => {
  const item = await ShoppingItem.create(req.body);

  res
    .status(201)
    .json({ status: RES_SUCCESS, message: "Created", result: item });
};

export {
  getAllShoppingItems,
  getSingleShoppingItem,
  updateShoppingItem,
  deleteShoppingItem,
  createShoppingItem,
};
