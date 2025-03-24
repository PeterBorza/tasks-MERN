export type Category = "food" | "drinks" | "non-food";

type SubCategories = {
  food: "vegetables" | "meat" | "dairy" | "bakery" | "condiments";
  drinks: "beer" | "wine" | "juice" | "alcohol";
  ["non-food"]: "kitchen" | "electronics" | "furniture" | "bathroom";
};

export type ShoppingItemDTO<T extends Category = Category> = {
  _id: string;
  __v: number;
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

export type ShoppingItem = Omit<ShoppingItemDTO, "_id" | "__v"> & { id: string };
