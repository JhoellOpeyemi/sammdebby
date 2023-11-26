import PropTypes from "prop-types";

import Picture from "../Picture/Picture";
import { ExecCardContainer } from "./ExecCard.styled";
import { StyledText } from "../../styled/Text.styled";

const ExecCard = ({ position, desc, src }) => {
  return (
    <ExecCardContainer>
      <Picture width="10.5rem" height="12rem" src={src} />

      <StyledText className="position">{position}</StyledText>
      <StyledText className="desc">{desc}</StyledText>
    </ExecCardContainer>
  );
};

ExecCard.propTypes = {
  position: PropTypes.string,
  desc: PropTypes.string,
  src: PropTypes.string,
};

export default ExecCard;
