import React from "react";
import Home from "../home";

import TestRenderer from "react-test-renderer";

jest.mock("gatsby-plugin-image");

describe("Home component", () => {
  test("renders the correct basic shape", () => {
    const homeProps = { headingText: "Heading", summaryText: "Lorem ipsum" };

    const tree = TestRenderer.create(<Home {...homeProps} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
