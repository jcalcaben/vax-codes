import React from "react";

import { root, container } from "./main.module.css";

const Main = (props) => {
  const { children } = props;

  return (
    <main className={root}>
      <div className={container}>{children}</div>
    </main>
  );
};

export default Main;
