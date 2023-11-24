import Hero from "../../Hero/Hero";
import Picture from "../../Picture/Picture";
import Quote from "../../Quote/Quote";

import TestImage from "../../../assets/images/test-image.png";

const Home = () => {
  return (
    <>
      <Hero />
      <Quote
        text={
          "We are the fountain of music, committed to exceptional qualities and comprehensive music education."
        }
      />
      <Picture width="100%" height="435px" src={TestImage} />
    </>
  );
};

export default Home;
