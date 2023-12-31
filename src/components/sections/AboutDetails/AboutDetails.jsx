import { PageHeading } from "../../../styled/Text.styled";
import { Headings, HeadingsSlide } from "../../../styled/HeadingSlider";
import { AboutDetailsContainer } from "./AboutDetails.styled";
import AboutGrid from "./AboutGrid";

import bgIcon3 from "../../../assets/images/bg3.svg";
import bgIcon1 from "../../../assets/images/bg1.svg";
import { BackgroundIcon } from "../../../styled/Utils.styled";

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
        <Headings>
          <PageHeading>The Sammdebby Team</PageHeading>
        </Headings>
      </HeadingsSlide>

      <AboutGrid />

      <BackgroundIcon className="bgIcon3" src={bgIcon3} alt="" />
      <BackgroundIcon
        className="bgIcon1"
        src={bgIcon1}
        alt=""
        top="60%"
        right="-6rem"
        width="16rem"
      />
    </AboutDetailsContainer>
  );
};

export default AboutDetails;
