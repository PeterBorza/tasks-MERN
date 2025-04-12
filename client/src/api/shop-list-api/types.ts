export interface ShoppingItem {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  acquired: boolean;
  details: string;
}

export type UserName = "Mihaela" | "Peter" | "Mirela";

export interface ShoppingList {
  _id: string;
  creator: UserName;
  items: Array<{
    item: string;
    acquired: boolean;
  }>;
  resolved: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  message: string;
  result: T;
}

export interface CreateShoppingItemRequest {
  name: string;
  image?: string;
  quantity?: number;
  details?: string;
}

export interface AddItemToListRequest {
  shoppingItemId: string;
}

export interface ToggleItemAcquiredRequest {
  shoppingItemId: string;
  acquired: boolean;
}

export interface CreateShoppingListRequest {
  creator: "Mihaela" | "Peter" | "Mirela";
}

export interface ResolveShoppingListRequest {
  listId: string;
}

export interface DeleteShoppingListRequest {
  listId: string;
}
