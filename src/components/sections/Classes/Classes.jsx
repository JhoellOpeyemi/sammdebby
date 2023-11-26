import { SectionHeading, StyledText } from "../../../styled/Text.styled";
import { BackgroundIcon, StyledDivider } from "../../../styled/Utils.styled";
import ClassCard from "../../ClassCard/ClassCard";
import { CardGroup, ClassesSection } from "./Classes.styled";

import bgIcon from "../../../assets/images/bg1.svg";
import { Button } from "../../../styled/Button.styled";

const Classes = () => {
  return (
    <>
      <StyledDivider />
      <ClassesSection>
        <SectionHeading>Our classes</SectionHeading>

        <StyledText>
          These classes were designed with utmost considerations to take you
          from the level you are to the next level in playing and understanding
          your favorite musical instruments.
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
        </CardGroup>

        <div className="link">
          <Button to="/classes" type="primary">
            View all classes
          </Button>
        </div>

        <BackgroundIcon
          src={bgIcon}
          alt=""
          top="45.7%"
          left="-5rem"
          width="22rem"
        />
      </ClassesSection>
    </>
  );
};

export default Classes;
