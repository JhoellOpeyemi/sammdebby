import { Button } from "../../../styled/Button.styled";
import { SectionHeading, StyledText } from "../../../styled/Text.styled";
import Slider from "../Slider/Slider";

import { SliderContainer, StyledSection, TextGroup } from "./WhoWeAre.styled";

import TestImage from "../../../assets/images/test-image.png";
import TestImage2 from "../../../assets/images/test-image2.png";
import bgIcon from "../../../assets/images/bg2.svg";
import { BackgroundIcon } from "../../../styled/Utils.styled";

const WhoWeAre = () => {
  const images = [TestImage2, TestImage];

  return (
    <StyledSection>
      <SectionHeading>Who we are</SectionHeading>

      <TextGroup>
        <StyledText color="#444">
          We are not just a group of music experts, we are a team dedicated to
          instilling our interpretation of music into you.
        </StyledText>
        <StyledText color="#444">
          We see the world through the lens of music
        </StyledText>
      </TextGroup>

      <Button type="primary">Read more</Button>

      <SliderContainer>
        <Slider images={images} />
        <Slider images={images} />
      </SliderContainer>

      <BackgroundIcon
        src={bgIcon}
        alt=""
        top="8rem"
        right="-5.8rem"
        width="20rem"
        height="20rem"
      />
    </StyledSection>
  );
};

export default WhoWeAre;
