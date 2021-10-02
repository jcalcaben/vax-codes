import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  root,
  callToAction,
  heading,
  summary,
  image,
  attribution,
  attributionLink,
} from "./heroSection.module.css";

const HeroSection = (props) => {
  const { headingText, summaryText } = props;

  return (
    <div className={root}>
      <section className={callToAction}>
        <h1 className={heading}>{headingText}</h1>
        <p className={summary}>{summaryText}</p>
      </section>
      <div className={image}>
        <StaticImage
          src="./images/homeHero.jpg"
          alt="Man in Gray Long Sleeve Shirt Holding Baby in White Onesie"
        />
        <div>
          <span className={attribution}>Public Domain: </span>
          <a
            className={attributionLink}
            href="https://www.pexels.com/photo/man-in-gray-long-sleeve-shirt-holding-baby-in-white-onesie-6973197/"
          >
            Mikhail Nilov
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
