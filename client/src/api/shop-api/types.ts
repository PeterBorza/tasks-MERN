export type ShoppingItemDTO = {
  _id: string;
  __v: number;
  name: string;
  image?: string;
};

export type ShoppingItem = Omit<ShoppingItemDTO, "_id" | "__v"> & { id: string };
