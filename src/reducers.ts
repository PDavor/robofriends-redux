import { Action, AnyAction } from "redux";
import { ISetSearchField } from "./actions";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
import { IRobot } from "./utils/types";

export interface IState {
  searchRobots: IInitialStateSearch
  requestRobots: IInitialStateRobots
}

export interface IStore {
  state: IState
}

export interface IInitialStateSearch {
  searchField: string;
}

const initialStateSearch: IInitialStateSearch = {
  searchField: "",
};

export const searchRobots = ({state = initialStateSearch, action} : {state: IInitialStateSearch, action: AnyAction}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export interface IInitialStateRobots {
  isPending: boolean;
  robots: IRobot[]
  error?: boolean
}

const initialStateRobots: IInitialStateRobots = {
  isPending: false,
  robots: [],
};

export const requestRobots = ({state = initialStateRobots, action}: {state: IInitialStateRobots, action: AnyAction}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
