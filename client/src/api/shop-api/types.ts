export type ShoppingItemDTO = {
  _id: string;
  __v: number;
  name: string;
  details?: string;
  quantity: number;
  image?: string;
  acquired?: boolean;

};

export type ShoppingItem = Omit<ShoppingItemDTO, "_id" | "__v"> & { id: string };
