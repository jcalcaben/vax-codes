import React from "react";

import LinkGroup from "./linkGroup";
import useFooter from "./useFooter";

import {
  root,
  backToTop,
  message,
  navigation,
  link,
} from "./footer.module.css";

const Footer = (props) => {
  const { helpfulLinks, qrCodes, adminPortal, otherLinks } = useFooter(props);

  return (
    <footer className={root}>
      <p className={message}>
        Vax.Codes is an open-source project run by volunteers at&nbsp;
        <a
          className={link}
          href="https://www.open-austin.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Austin
        </a>
        .
      </p>
      <div className={navigation}>
        <LinkGroup data={helpfulLinks} />
        <LinkGroup data={qrCodes} />
        <LinkGroup data={adminPortal} />
        <LinkGroup data={otherLinks} />
      </div>
      <a href="#top" className={backToTop}>
        Back to top
      </a>
    </footer>
  );
};

export default Footer;
