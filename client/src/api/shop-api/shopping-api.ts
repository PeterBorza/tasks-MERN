import { customAxios, Method } from "../axios";
import { Response } from "../response-types";
import { ShoppingItemDTO } from "./types";

const SHOPPING_URL = "/api/shopping";

const getAllDTOShoppingItems = async (): Promise<Response<ShoppingItemDTO[]>> =>
  await customAxios<Response<ShoppingItemDTO[]>>(Method.GET, SHOPPING_URL);

const deleteDTOShoppingItem = async (id: string): Promise<Response> =>
  await customAxios<Response, string>(Method.DELETE, `${SHOPPING_URL}/${id}`);

export { getAllDTOShoppingItems, deleteDTOShoppingItem };
