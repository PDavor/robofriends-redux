import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./MainPage.css";
import CounterButton from "../components/CounterButton";

function MainPage(props) {
  const { searchField, onSearchChange, robots, isPending, onRequestRobots } =
    props;
  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
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
