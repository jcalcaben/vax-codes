const React = require("react");

const imagePlugin = jest.requireActual("gatsby-plugin-image");

module.exports = {
  ...imagePlugin,
  StaticImage: jest.fn().mockImplementation((props) => {
    return React.createElement("img", { ...props });
  }),
};
