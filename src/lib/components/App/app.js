import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

const App = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default App;
