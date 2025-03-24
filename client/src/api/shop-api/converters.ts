import { ShoppingItemDTO, ShoppingItem } from "./types";

const convertItem = ({ _id: id, __v, ...rest }: ShoppingItemDTO): ShoppingItem => ({
  id,
  ...rest,
});

export { convertItem };
