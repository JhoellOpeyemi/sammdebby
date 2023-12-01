import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

import { AppContext } from "../../context/AppContext";

import Hero from "../Hero/Hero";
import Quote from "../sections/Quote/Quote";
import Picture from "../Picture/Picture";
import WhoWeAre from "../sections/WhoWeAre/WhoWeAre";
import Loader from "../Loader/Loader";

import TestImage from "../../assets/images/test-image.png";
import TestImage3 from "../../assets/images/test-image3.png";
import { Container } from "../../styled/Utils.styled";
import Classes from "../sections/Classes/Classes";
import useDocumentTitle from "../../useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");
  const { desktop } = useContext(AppContext);
  const [loader, setLoader] = useOutletContext();

  return (
    <>
      {loader ? (
        <motion.div key="loader">
          <Loader setLoader={setLoader} />
        </motion.div>
      ) : (
        <>
          <Hero />
          <Quote />

          {desktop && (
            <Picture type="home" width="100%" height="38rem" src={TestImage3} />
          )}
          {!desktop && (
            <Picture
              type="home"
              width="100%"
              height="27.1875rem"
              src={TestImage}
            />
          )}

          <Container>
            <WhoWeAre />
            <Classes />
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
