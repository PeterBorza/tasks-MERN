import { ShoppingItemDTO, ShoppingItem } from "./types";

const convertItem = ({ _id: id, ...rest }: ShoppingItemDTO): ShoppingItem => ({
  id,
  ...rest,
});

export { convertItem };
