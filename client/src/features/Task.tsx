import styled from "styled-components";

type Props = {
  name: string;
  completed: boolean;
};

const Task = ({ name, completed }: Props) => {
  return (
    <Container>
      <h2>{name}</h2>
      <div>{completed ? "DONE" : "TO DO"}</div>
    </Container>
  );
};

const Container = styled.div``;

export default Task;
