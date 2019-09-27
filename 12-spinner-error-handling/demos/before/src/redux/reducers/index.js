import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiStatusCall from './apiStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  apiStatusCall
});

export default rootReducer;
