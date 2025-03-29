import styled, { keyframes } from "styled-components";

const animate = keyframes`
0% {
    translate: 0 -41.5%
}
100% {
    translate: 0 -19.5%
}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Cover = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 240%;
  animation: ${animate} 6000ms infinite alternate ease;
`;

const TopCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  height: 100vh;
  background-color: ${props => props.theme.colors.dark};
`;

const TransparentCover = styled.div`
  height: 40vh;
`;

const BottomCover = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.colors.dark};
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.main};
`;

export { Cover, TopCover, TransparentCover, BottomCover, Container, HeroImage, Title };
