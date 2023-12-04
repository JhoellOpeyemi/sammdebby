import { motion } from "framer-motion";

import { QuoteWrapper } from "./Quote.styled";
import { Container } from "../../../styled/Utils.styled";
import { StyledText } from "../../../styled/Text.styled";
import AnimatedLetters from "../../AnimatedLetters/AnimatedLetters";
import { textVariants } from "../../../animations";

const Quote = () => {
  return (
    <>
      <QuoteWrapper>
        <Container>
          <StyledText
            as={motion.p}
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "all" }}
            type="medium"
          >
            <AnimatedLetters words="We are the fountain of music, committed to exceptional qualities and comprehensive music education." />
          </StyledText>
        </Container>
      </QuoteWrapper>
    </>
  );
};

export default Quote;
