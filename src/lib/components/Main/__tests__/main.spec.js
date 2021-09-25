import React from 'react';
import Main from '../main';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

describe("Main component", () => {
  test("renders the correct basic shape", () => {
    renderer.render(<Main>Content</Main>);
		const output = renderer.getRenderOutput();

    expect(output).toMatchSnapshot();
  });
});
