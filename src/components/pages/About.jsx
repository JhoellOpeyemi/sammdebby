import { Container } from "../../styled/Utils.styled";
import useDocumentTitle from "../../useDocumentTitle";
import AboutDetails from "../sections/AboutDetails/AboutDetails";
import Exec from "../sections/Exec/Exec";

const About = () => {
  useDocumentTitle("About");

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
