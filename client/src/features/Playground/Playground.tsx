import styled from "styled-components";

const Playground = () => {
  return (
    <Charts>
      <Pie />
      <Donut />

      <Legends>
        <span>America 40%</span>
        <span>Europe 25%</span>
        <span>Asia 20%</span>
        <span>Africa 15%</span>
      </Legends>
    </Charts>
  );
};

const Charts = styled.figure`
  display: flex;
  place-content: center;
  flex-flow: wrap;
  gap: 2rem;
`;
const Pie = styled.div`
  background-image: conic-gradient(
    from 30deg,
    var(--c1) 40%,
    var(--c2) 0 65%,
    var(--c3) 0 85%,
    var(--c4) 0
  );
  flex: 1 0 225px;
  max-width: 325px;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const Donut = styled(Pie)`
  background-image: radial-gradient(
      ${props => props.theme.colors.light} 40%,
      transparent 0 70%,
      ${props => props.theme.colors.light} 0
    ),
    conic-gradient(from 30deg, var(--c1) 40%, var(--c2) 0 65%, var(--c3) 0 85%, var(--c4) 0);
`;

const Legends = styled.figcaption`
  margin-block-end: 2rem;
  font-size: 0.9rem;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  gap: 1rem;

  span {
    position: relative;
    padding-inline-start: 1.25rem;

    &::before {
      position: absolute;
      left: 0;
      content: "";
      width: 0.8rem;
      aspect-ratio: 1;
      border-radius: 50%;
    }

    &:nth-child(1)::before {
      background-color: var(--c1);
    }

    &:nth-child(2)::before {
      background-color: var(--c2);
    }

    &:nth-child(3)::before {
      background-color: var(--c3);
    }

    &:nth-child(4)::before {
      background-color: var(--c4);
    }
  }
`;

export default Playground;
