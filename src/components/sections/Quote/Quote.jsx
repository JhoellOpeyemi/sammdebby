import { QuoteWrapper } from "./Quote.styled";
import { Container } from "../../../styled/Utils.styled";
import { StyledText } from "../../../styled/Text.styled";

const Quote = () => {
  return (
    <>
      <QuoteWrapper>
        <Container>
          <StyledText color="#eee" type="medium">
            We are the fountain of music, committed to exceptional qualities and
            comprehensive music education.
          </StyledText>
        </Container>
      </QuoteWrapper>
    </>
  );
};

export default Quote;
