export type Category = "food" | "drinks" | "non-food";

type SubCategories = {
  food: "vegetables" | "meat" | "dairy" | "bakery" | "condiments";
  drinks: "beer" | "wine" | "juice" | "alcohol";
  ["non-food"]: "kitchen" | "electronics" | "furniture" | "bathroom";
};

export type ShoppingItem<T extends Category = Category> = {
  id: string;
  name: string;
  category: T;
  type: SubCategories[T];
  urgent: boolean;
  quantity?: number;
  measure?: "kg" | "pcs" | "ltrs" | "mtrs";
  price?: number;
  market?: string;
  image?: string;
  acquired?: boolean;
};

export type ShoppingItemDTO = Omit<ShoppingItem, "id"> & { _id: string };
