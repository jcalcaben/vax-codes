import React from 'react';
import Footer from '../footer';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

describe("Footer component", () => {
  test("renders the correct basic shape", () => {
    renderer.render(<Footer>Content</Footer>);
		const output = renderer.getRenderOutput();

    expect(output).toMatchSnapshot();
  });
});
