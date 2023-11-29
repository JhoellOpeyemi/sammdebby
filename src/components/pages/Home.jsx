import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import Hero from "../Hero/Hero";
import Quote from "../sections/Quote/Quote";
import Picture from "../Picture/Picture";
import WhoWeAre from "../sections/WhoWeAre/WhoWeAre";

import TestImage from "../../assets/images/test-image.png";
import TestImage3 from "../../assets/images/test-image3.png";
import { Container } from "../../styled/Utils.styled";
import Classes from "../sections/Classes/Classes";
import useDocumentTitle from "../../useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");
  const { desktop } = useContext(AppContext);

  console.log(desktop);

  return (
    <>
      <Hero />
      <Quote />

      {desktop && (
        <Picture type="home" width="100%" height="38rem" src={TestImage3} />
      )}
      {!desktop && (
        <Picture type="home" width="100%" height="27.1875rem" src={TestImage} />
      )}

      <Container>
        <WhoWeAre />
        <Classes />
      </Container>
    </>
  );
};

export default Home;
