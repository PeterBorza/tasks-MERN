import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteDTOShoppingItem, getAllDTOShoppingItems } from "src/api";
import { convertItem } from "src/api";

const useQueryShoppingItems = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteItem } = useMutation({
    mutationFn: (id: string) => deleteDTOShoppingItem(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  const query = useQuery({
    queryKey: ["items"],
    queryFn: getAllDTOShoppingItems,
    staleTime: 10 * 1000,
    select: data => data.result?.map(item => convertItem(item)),
  });

  return { query, deleteItem };
};

export default useQueryShoppingItems;
