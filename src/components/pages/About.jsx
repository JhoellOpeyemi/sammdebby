import { Container } from "../../styled/Utils.styled";
import AboutDetails from "../sections/AboutDetails/AboutDetails";
import Exec from "../sections/Exec/Exec";

const About = () => {
  return (
    <>
      <Container>
        <AboutDetails />
        <Exec />
      </Container>
    </>
  );
};

export default About;
