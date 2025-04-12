import express from "express";
import {
  getActiveList,
  createNewList,
  addItemToList,
  toggleItemAcquired,
  resolveList,
  deleteList,
} from "../controllers/shoppingList.js";

const router = express.Router();

router.route("/active").get(getActiveList);
router.route("/").post(createNewList);
router.route("/add-item").post(addItemToList);
router.route("/toggle-acquired").patch(toggleItemAcquired);
router.route("/resolve").patch(resolveList);
router.route("/:id").delete(deleteList);

export default router;
