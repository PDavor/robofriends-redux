import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";
// toMatchSnapshot created a snapshot of a component and then every time you change something it checks if render looks the same as a snapshot
// npm test -- --coverage to check coverage
it("expect to render card component", () => {
  const mockRobots = [
    { id: 1, name: "Jon Snow", username: "johnjohn", email: "john@gmail.com" },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
