
import React from 'react';
import Header from '../header';
import TestRenderer from 'react-test-renderer';

describe("Header component", () => {
  test("renders the correct basic shape", () => {
		const tree = TestRenderer.create(<Header/>);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
