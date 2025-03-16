import express from "express";

import {
  getAllShoppingItems,
  getSingleShoppingItem,
  deleteShoppingItem,
  updateShoppingItem,
  createShoppingItem,
} from "../controllers/shopping.js";

const router = express.Router();

router.route("/").get(getAllShoppingItems).post(createShoppingItem);
router
  .route("/:id")
  .get(getSingleShoppingItem)
  .patch(updateShoppingItem)
  .delete(deleteShoppingItem);

export default router;
