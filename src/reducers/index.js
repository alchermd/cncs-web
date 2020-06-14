import { combineReducers } from "redux";
import snippetsReducer from "./snippetsReducer";

const rootReducer = combineReducers({
  snippets: snippetsReducer,
});

export default rootReducer;
