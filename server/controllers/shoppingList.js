import ShoppingList from "../models/ShoppingList.js";
import ShoppingItem from "../models/ShoppingItem.js";
import { createCustomError } from "../errors/custom-error.js";
import { NOT_FOUND, BAD_REQUEST } from "../constants/http.js";

const getActiveList = async (req, res, next) => {
  const activeList = await ShoppingList.findOne({ resolved: false });
  if (!activeList) {
    createCustomError("No active shopping list available.", NOT_FOUND);
  }
  res
    .status(200)
    .json({ message: "Active list fetched successfully", result: activeList });
};

const createNewList = async (req, res, next) => {
  const existingList = await ShoppingList.findOne({ resolved: false });
  if (existingList) {
    createCustomError(
      "An active list already exists. Resolve the current list to create a new one.",
      BAD_REQUEST
    );
  }

  const { creator } = req.body;
  const newList = new ShoppingList({
    creator,
    items: [],
    resolved: false,
  });

  await newList.save();
  res.status(201).json({
    message: "New shopping list created successfully",
    result: newList,
  });
};

const addItemToList = async (req, res, next) => {
  const { shoppingItemId } = req.body;
  const activeList = await ShoppingList.findOne({ resolved: false });
  if (!activeList) {
    createCustomError("No active shopping list available.", NOT_FOUND);
  }

  const itemExists = activeList.items.some(
    listItem => listItem.item.toString() === shoppingItemId
  );
  if (itemExists) {
    createCustomError("Item already exists in the list.", BAD_REQUEST);
  }

  const shoppingItem = await ShoppingItem.findById(shoppingItemId);
  if (!shoppingItem) {
    createCustomError("Item not found in the marketplace.", NOT_FOUND);
  }

  activeList.items.push({ item: shoppingItemId, acquired: false });
  await activeList.save();

  res
    .status(200)
    .json({ message: "Item added to the shopping list", result: activeList });
};

const toggleItemAcquired = async (req, res, next) => {
  const { shoppingItemId, acquired } = req.body;
  const activeList = await ShoppingList.findOne({ resolved: false });
  if (!activeList) {
    createCustomError("No active shopping list available.", NOT_FOUND);
  }

  const itemInList = activeList.items.find(
    listItem => listItem.item.toString() === shoppingItemId
  );
  if (!itemInList) {
    createCustomError("Item not found in the active list.", NOT_FOUND);
  }

  itemInList.acquired = acquired;
  await activeList.save();

  res
    .status(200)
    .json({ message: "Item acquisition status updated", result: activeList });
};

const resolveList = async (req, res, next) => {
  const activeList = await ShoppingList.findOne({ resolved: false });
  if (!activeList) {
    createCustomError("No active shopping list available.", NOT_FOUND);
  }

  activeList.resolved = true;
  await activeList.save();

  res
    .status(200)
    .json({ message: "Shopping list resolved", result: activeList });
};

const deleteList = async (req, res, next) => {
  const { id } = req.params;
  const activeList = await ShoppingList.findById(id);
  if (!activeList) {
    createCustomError("Shopping list not found.", NOT_FOUND);
  }

  if (activeList.creator !== req.body.creator) {
    createCustomError("Only the creator can delete this list.", BAD_REQUEST);
  }

  await activeList.remove();
  res.status(200).json({ message: "Shopping list deleted successfully" });
};

export {
  getActiveList,
  createNewList,
  addItemToList,
  toggleItemAcquired,
  resolveList,
  deleteList,
};
