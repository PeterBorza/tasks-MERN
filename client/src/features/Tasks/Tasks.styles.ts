import styled from "styled-components";

const Container = styled.section`
  margin: auto;
  width: max(320px, 80%);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding: 8px;
  font-size: 2rem;
  align-self: center;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  padding-top: 1rem;
  overflow: auto;
  max-height: 60vh;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.green.default_dark} transparent;
`;

export { Container, Title, Toolbar, Actions, TaskContainer };
