import React from "react";
import App from "../app";
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

describe("App component", () => {
  test("renders the correct basic shape", () => {
    renderer.render(<App>Content</App>);
		const output = renderer.getRenderOutput();

    expect(output).toMatchSnapshot();
  });
});
