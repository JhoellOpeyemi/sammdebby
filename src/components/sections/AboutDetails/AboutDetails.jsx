import { PageHeading } from "../../../styled/Text.styled";
import { Headings, HeadingsSlide } from "../../../styled/HeadingSlider";
import { AboutDetailsContainer } from "./AboutDetails.styled";
import AboutGrid from "./AboutGrid";

const AboutDetails = () => {
  return (
    <AboutDetailsContainer>
      <HeadingsSlide>
        <Headings>
          <PageHeading>The Sammdebby Team</PageHeading>
        </Headings>
        <Headings>
          <PageHeading>The Sammdebby Team</PageHeading>
        </Headings>
      </HeadingsSlide>

      <AboutGrid />
    </AboutDetailsContainer>
  );
};

export default AboutDetails;
