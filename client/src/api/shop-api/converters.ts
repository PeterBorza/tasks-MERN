import { ShoppingItemDTO, ShoppingItem } from "./types";

const convertItem = ({ _id: id, ...rest }: Omit<ShoppingItemDTO, "__v">): ShoppingItem => ({
  id,
  ...rest,
});

export { convertItem };
