import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteDTOShoppingItem, getAllDTOShoppingItems } from "src/api";
import { convertItem } from "src/api/shop-api/converters";

const useQueryShoppingItems = () => {
  const deleteItem = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (id: string) => deleteDTOShoppingItem(id),
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["items"] });
      },
    });
  };

  const query = useQuery({
    queryKey: ["items"],
    queryFn: getAllDTOShoppingItems,
  });

  const items = query.data?.result?.map(task => convertItem(task));

  return { query: { ...query, data: { ...query.data, result: items } }, deleteItem };
};

export default useQueryShoppingItems;
