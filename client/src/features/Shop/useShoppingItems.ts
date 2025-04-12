import { useSuspenseQuery } from "@tanstack/react-query";
import { getAllShoppingItems } from "src/api/shop-list-api";

export const useShoppingItems = () => {
  const query = useSuspenseQuery({
    queryKey: ["shoppingItems"],
    queryFn: getAllShoppingItems,
    staleTime: 10 * 1000,
    select: data => data.result || [],
  });

  return query;
};
