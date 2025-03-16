import styled from "styled-components";

import useQueryShoppingItems from "./useQueryShoppingItems";
import { Suspense } from "react";

const Shop = () => {
  const {
    query: { data: shoppingList, isPending, isError, error },
    deleteItem,
  } = useQueryShoppingItems();

  const { mutate: deleteShoppingItem } = deleteItem();

  if (isPending) return <div>...Loading</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <Suspense fallback={<div>...Loading items</div>}>
      <Container>
        Shopping list work in progress
        {shoppingList.result &&
          shoppingList.result.map(item => (
            <Item key={item.id} onClick={() => deleteShoppingItem(item.id)} title="Delete item">
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.type}</p>
            </Item>
          ))}
      </Container>
    </Suspense>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  border: 1px solid red;
`;

const Item = styled.div`
  width: 300px;
  border: 1px solid red;
  cursor: pointer;
`;

export default Shop;
