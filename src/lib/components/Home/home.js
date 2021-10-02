import React from "react";

import HeroSection from "./heroSection";

const Home = (props) => {
  const { headingText, summaryText } = props;

  const heroSectionProps = { headingText, summaryText };
  return (
    <>
      <HeroSection {...heroSectionProps} />
    </>
  );
};

export default Home;
