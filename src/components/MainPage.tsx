import React, { useState, useEffect, ChangeEventHandler } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./MainPage.css";
import CounterButton from "./CounterButton";
import { IAppProps, IRobot } from "../utils/types";

function MainPage(props: IAppProps) {
  const { searchField, onSearchChange, robots, isPending, onRequestRobots } =
    props;
  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot: IRobot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => console.log(filteredRobots), [filteredRobots]);
  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <CounterButton color="blue" />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default MainPage;
