import PropTypes from "prop-types";

import {
  Benefit,
  BenefitsGroup,
  CardContainer,
  CardType,
  Price,
} from "./ClassCard.styled";
import { Button } from "../../styled/Button.styled";

const ClassCard = ({ type, price, benefit1, benefit2, benefit3, benefit4 }) => {
  return (
    <CardContainer>
      <CardType>{type}</CardType>
      <Price>{price}</Price>

      <BenefitsGroup>
        <Benefit>{benefit1}</Benefit>
        <Benefit>{benefit2}</Benefit>
        <Benefit>{benefit3}</Benefit>
        <Benefit>{benefit4}</Benefit>
      </BenefitsGroup>

      <Button type="secondary">Enroll</Button>
    </CardContainer>
  );
};

ClassCard.propTypes = {
  type: PropTypes.string,
  price: PropTypes.string,
  benefit1: PropTypes.string,
  benefit2: PropTypes.string,
  benefit3: PropTypes.string,
  benefit4: PropTypes.string,
};

export default ClassCard;
