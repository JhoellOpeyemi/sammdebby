import {
  Address,
  Contact,
  Copyright,
  FooterContainer,
  LinksGroup,
} from "./Footer.styled";
import { Container, StyledDivider } from "../../styled/Utils.styled";
import { StyledText } from "../../styled/Text.styled";

const Footer = () => {
  return (
    <Container>
      <StyledDivider color="rgba(0,0,0,0.25)" />
      <FooterContainer>
        <Address>
          <h5>Address</h5>
          <StyledText>
            13, Alabi Street, Gbagada, Lagos State, Nigeria.
          </StyledText>
        </Address>

        <Contact>
          <h5>Contact</h5>

          <LinksGroup>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Whatsapp</a>
            <a href="/">sammdebbymusic@gmail.com</a>
          </LinksGroup>
        </Contact>

        <Copyright> &copy; Sammdebby Music 2023</Copyright>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
