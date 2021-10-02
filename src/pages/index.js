import React from "react";
import Home from "../lib/components/Home";
import App from "../lib/components/App";

const Page = (props) => {
  const homeProps = {
    headingText: "Easy and free Covid-19 vaccine verification",
    summaryText:
      "Scan QR codes to verify someone has received a Covid-19 vaccine.",
  };
  return (
    <App>
      <Home {...homeProps} />
    </App>
  );
};

export default Page;
