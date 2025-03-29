import {
  BottomCover,
  Container,
  Cover,
  HeroImage,
  Title,
  TopCover,
  TransparentCover,
} from "./Landing.styles";
import notebook_2000 from "src/assets/notebook_2000.jpg";

const LandingPage = () => {
  return (
    <Container>
      <HeroImage src={notebook_2000} alt="notebook" />
      <Cover>
        <TopCover>
          <Title>TASK MANAGER</Title>
          <Title>SHOPPING LIST</Title>
        </TopCover>
        <TransparentCover />
        <BottomCover />
      </Cover>
    </Container>
  );
};

export default LandingPage;
