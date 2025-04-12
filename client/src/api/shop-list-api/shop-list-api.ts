import { customAxios, Method } from "../axios";
import {
  ApiResponse,
  ShoppingList,
  ShoppingItem,
  CreateShoppingListRequest,
  AddItemToListRequest,
  ToggleItemAcquiredRequest,
  CreateShoppingItemRequest,
} from "./types";

const ITEMS_URL = "/api/shopping";
const LISTS_URL = "/api/shopping-lists";

const getActiveList = async (): Promise<ApiResponse<ShoppingList>> =>
  customAxios<ApiResponse<ShoppingList>, void>(Method.GET, `${LISTS_URL}/active`);

const createNewList = async (data: CreateShoppingListRequest): Promise<ApiResponse<ShoppingList>> =>
  customAxios<ApiResponse<ShoppingList>, CreateShoppingListRequest>(Method.POST, LISTS_URL, data);

const addItemToList = async (data: AddItemToListRequest): Promise<ApiResponse<ShoppingList>> =>
  customAxios<ApiResponse<ShoppingList>, AddItemToListRequest>(
    Method.POST,
    `${LISTS_URL}/add-item`,
    data
  );

const toggleItemAcquired = async (
  data: ToggleItemAcquiredRequest
): Promise<ApiResponse<ShoppingList>> =>
  customAxios<ApiResponse<ShoppingList>, ToggleItemAcquiredRequest>(
    Method.PATCH,
    `${LISTS_URL}/toggle-acquired`,
    data
  );

const resolveList = async (listId: string): Promise<ApiResponse<ShoppingList>> =>
  customAxios<ApiResponse<ShoppingList>, { listId: string }>(Method.PATCH, `${LISTS_URL}/resolve`, {
    listId,
  });

const deleteList = async (listId: string): Promise<ApiResponse<ShoppingList>> =>
  customAxios<ApiResponse<ShoppingList>, void>(Method.DELETE, `${LISTS_URL}/${listId}`);

const getAllShoppingItems = async (): Promise<ApiResponse<ShoppingItem[]>> =>
  customAxios<ApiResponse<ShoppingItem[]>, void>(Method.GET, ITEMS_URL);

const createShoppingItem = async (
  data: CreateShoppingItemRequest
): Promise<ApiResponse<ShoppingItem>> =>
  customAxios<ApiResponse<ShoppingItem>, CreateShoppingItemRequest>(Method.POST, ITEMS_URL, data);

const updateShoppingItem = async (
  id: string,
  data: CreateShoppingItemRequest
): Promise<ApiResponse<ShoppingItem>> =>
  customAxios<ApiResponse<ShoppingItem>, CreateShoppingItemRequest>(
    Method.PATCH,
    `${ITEMS_URL}/${id}`,
    data
  );

const deleteShoppingItem = async (id: string): Promise<ApiResponse<ShoppingItem>> =>
  customAxios<ApiResponse<ShoppingItem>, void>(Method.DELETE, `${ITEMS_URL}/${id}`);

export {
  getActiveList,
  createNewList,
  addItemToList,
  toggleItemAcquired,
  resolveList,
  deleteList,
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem,
};
