import React from "react";

import {root, brand, scan, nav, navItem } from "./header.module.css";

const Header = (props) => {
  return (
    <header className={root}>
      <span className={brand}>Vax.Codes</span>
      <button className={scan}>Scan QR Code</button>
      <nav className={nav}>
        <span className={navItem}>How it works</span>
        <span className={navItem}>About us</span>
      </nav>
    </header>
  );
};

export default Header;
