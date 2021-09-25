
import React from 'react';
import Header from '../header';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

describe("Header component", () => {
  test("renders the correct basic shape", () => {
    renderer.render(<Header>Content</Header>);
		const output = renderer.getRenderOutput();

    expect(output).toMatchSnapshot();
  });
});
