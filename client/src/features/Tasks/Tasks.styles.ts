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
`;

const Toolbar = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 8px;
  width: 100%;
`;

const Actions = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  gap: 1rem;
  padding: clamp(4px, 2vw, 16px);
  overflow: auto;
  max-height: 70vh;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.green.default_dark} transparent;
  scrollbar-gutter: stable both-edges;
`;

export { Container, Title, Toolbar, Actions, TaskContainer };
