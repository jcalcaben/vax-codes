import React from 'react';
import Footer from '../footer';
import TestRenderer from 'react-test-renderer';

describe("Footer component", () => {
  test("renders the correct basic shape", () => {
    const tree = TestRenderer.create(<Footer/>);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
