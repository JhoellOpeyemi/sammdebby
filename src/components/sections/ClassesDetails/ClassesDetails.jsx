import { CardGroup, ClassesDetailsContainer } from "./ClassesDetails.styled";
import { Headings, HeadingsSlide } from "../../../styled/HeadingSlider";
import { PageHeading, StyledText } from "../../../styled/Text.styled";
import ClassCard from "../../ClassCard/ClassCard";
import { BackgroundIcon } from "../../../styled/Utils.styled";

import bgIcon1 from "../../../assets/images/bg1.svg";
import bgIcon3 from "../../../assets/images/bg3.svg";

const ClassesDetails = () => {
  return (
    <ClassesDetailsContainer>
      <HeadingsSlide>
        <Headings>
          <PageHeading>Our Classes</PageHeading>
        </Headings>
        <Headings>
          <PageHeading>Our Classes</PageHeading>
        </Headings>
      </HeadingsSlide>

      <StyledText>
        Our training programs are about you. They are flexible, intense and you
        also choose the days for the classes.
      </StyledText>

      <StyledText>
        These classes were designed with utmost considerations to take you from
        the level you are to the next level in playing and understanding your
        favorite musical instruments.
      </StyledText>

      <StyledText>
        After the training, we become a family and you get to have lifetime
        access to the instructors.
      </StyledText>

      <StyledText>* The musical instruments are provided by us</StyledText>

      <CardGroup>
        <ClassCard
          type="Basic"
          price="N55,000"
          benefit1="Training will be in groups"
          benefit2="4 months"
          benefit3="2 days per week"
          benefit4="2 hours per day"
        />

        <ClassCard
          type="Gold"
          price="N85,000"
          benefit1="One on one Sessions"
          benefit2="5 months"
          benefit3="3 days per week"
          benefit4="2 hours per day"
        />

        <ClassCard
          type="Diamond"
          price="N115,000"
          benefit1="One on one Sessions"
          benefit2="6 months"
          benefit3="3 days per week"
          benefit4="2 hours per day"
        />
      </CardGroup>

      <BackgroundIcon
        src={bgIcon3}
        alt=""
        top="68%"
        left="-4rem"
        width="19rem"
      />
      <BackgroundIcon
        src={bgIcon1}
        alt=""
        top="43%"
        right="-6rem"
        width="18rem"
      />
    </ClassesDetailsContainer>
  );
};

export default ClassesDetails;
