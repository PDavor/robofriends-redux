import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";
// toMatchSnapshot created a snapshot of a component and then every time you change something it checks if render looks the same as a snapshot
it("expect to render card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
