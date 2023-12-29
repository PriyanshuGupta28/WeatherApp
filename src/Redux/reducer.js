// Importing combineReducers function from Redux
import { combineReducers } from "redux";

// Importing the individual reducer for the 'Home' feature
import HomeReducer from "./HomeReducer/HomeReducer";

// Combining reducers to create the root reducer
export const reducer = combineReducers({
  // Mapping the 'Home' feature state to the 'HomeReducer'
  Home: HomeReducer,
});
