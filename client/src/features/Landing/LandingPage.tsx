import {
  BottomCover,
  Container,
  Cover,
  HeroImage,
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
          <h1>TASK MANAGER</h1>
        </TopCover>
        <TransparentCover />
        <BottomCover />
      </Cover>
    </Container>
  );
};

export default LandingPage;
