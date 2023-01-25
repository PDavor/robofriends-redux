import React from "react";
import MainPage from "../components/MainPage";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import CounterButton from "../components/CounterButton";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props) {
  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
