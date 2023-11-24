import PropTypes from "prop-types";

import { QuoteWrapper, Text } from "./Quote.styled";
import { Container } from "../../styled/Utils.styled";

const Quote = ({ text }) => {
  return (
    <>
      <QuoteWrapper>
        <Container>
          <Text>{text}</Text>
        </Container>
      </QuoteWrapper>
    </>
  );
};

Quote.propTypes = {
  text: PropTypes.string,
};

export default Quote;
