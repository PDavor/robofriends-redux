import { ChangeEvent } from "react";
import MainPage from "../components/MainPage";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import { IAppProps } from "../utils/types";
import { IState } from "../reducers";

const mapStateToProps = (state: IState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props: IAppProps) {
  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
