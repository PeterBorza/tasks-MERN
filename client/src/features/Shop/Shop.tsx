import styled from "styled-components";

import useQueryShoppingItems from "./useQueryShoppingItems";
import { Suspense } from "react";

const Shop = () => {
  const {
    query: { data: shoppingList, isPending, isError, error },
    deleteItem,
  } = useQueryShoppingItems();

  return (
    <>
      {isPending && <div>...Loading</div>}
      {isError && <div>Error: {error?.message}</div>}
      <Suspense fallback={<div>...Loading items</div>}>
        <Container>
          Shopping list work in progress
          {shoppingList &&
            shoppingList.map(item => (
              <Item key={item.id} onClick={() => deleteItem(item.id)} title="Delete item">
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.type}</p>
              </Item>
            ))}
        </Container>
      </Suspense>
    </>
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
