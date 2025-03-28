import styled from "styled-components";

import useQueryShoppingItems from "./useQueryShoppingItems";
import { Suspense } from "react";
import { Spinner } from "src/components/Spinner";
import { Card } from "src/components/Card";
import potato_200 from "src/assets/potato_200.jpg";

const Shop = () => {
  const {
    query: { data: shoppingList, isPending, isError, error },
    deleteItem,
  } = useQueryShoppingItems();

  return (
    <Section>
      {isError && <div>Error: {error?.message}</div>}
      <Suspense fallback={<Spinner />}>
        <Container>
          {isPending ? (
            <Spinner />
          ) : (
            <>
              {shoppingList?.map(item => (
                <Card
                  key={item.id}
                  onClick={() => deleteItem(item.id)}
                  title="Delete item"
                  imageSrc={potato_200}
                >
                  <p>{item.name}</p>
                  <p>{item.details}</p>
                  <p>{item.quantity} BUC</p>
                </Card>
              ))}
            </>
          )}
        </Container>
      </Suspense>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 3rem;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  padding: 16px;
  gap: 8px;
`;

export default Shop;
