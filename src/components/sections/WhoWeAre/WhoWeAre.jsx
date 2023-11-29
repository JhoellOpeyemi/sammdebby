import { Button } from "../../../styled/Button.styled";
import { SectionHeading, StyledText } from "../../../styled/Text.styled";
import Slider from "../Slider/Slider";

import {
  SliderContainer,
  StyledSection,
  TextAndButton,
  TextGroup,
} from "./WhoWeAre.styled";

import TestImage from "../../../assets/images/test-image.png";
import TestImage2 from "../../../assets/images/test-image2.png";
import bgIcon from "../../../assets/images/bg2.svg";
import { BackgroundIcon } from "../../../styled/Utils.styled";

const WhoWeAre = () => {
  const images = [TestImage2, TestImage];

  return (
    <StyledSection>
      <TextAndButton>
        <SectionHeading>Who we are</SectionHeading>

        <TextGroup>
          <StyledText>
            We are not just a group of music experts, we are a team dedicated to
            instilling our interpretation of music into you.
          </StyledText>
          <StyledText>We see the world through the lens of music</StyledText>
        </TextGroup>

        <Button to="/about" type="primary">
          Read more
        </Button>
      </TextAndButton>

      <SliderContainer>
        <Slider images={images} />
        <Slider images={images} />
        <Slider images={images} />
      </SliderContainer>

      <BackgroundIcon className="bgIcon" src={bgIcon} alt="" />
    </StyledSection>
  );
};

export default WhoWeAre;
