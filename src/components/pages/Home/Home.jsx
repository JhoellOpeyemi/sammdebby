import Hero from "../../Hero/Hero";
import Quote from "../../sections/Quote/Quote";
import Picture from "../../Picture/Picture";
import WhoWeAre from "../../sections/WhoWeAre/WhoWeAre";

import TestImage from "../../../assets/images/test-image.png";
import { Container } from "../../../styled/Utils.styled";

const Home = () => {
  return (
    <>
      <Hero />
      <Quote />
      <Picture width="100%" height="27.1875rem" src={TestImage} />

      <Container>
        <WhoWeAre />
      </Container>
    </>
  );
};

export default Home;
