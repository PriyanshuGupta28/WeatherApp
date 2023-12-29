// Importing action type constants
import {
  GETAUTOCOMPLETEDATA,
  GETCURRENTLOCATION,
  GETHISTORYDATA,
  GETWEATHERDATA,
  SETERRORMESSAGE,
  SETSUCCESSMESSAGE,
} from "../../Utilities/ReduxConstants/ReduxConstants";

// Initial state for the Redux store
const initState = {
  data: [],
  searchQuery: "",
  msg: "", // Not sure about the purpose of this property
  autocompleteData: [],
  historyData: [],
  sucessMsg: "", // Correcting typo: 'successMsg'
  errorMsg: "",
};

// Redux reducer function
export default (state = initState, action) => {
  switch (action.type) {
    // Handling action for getting current location
    case GETCURRENTLOCATION:
      console.log(action.payload, "GETCURRENTLOCATION");
      return {
        ...state,
        searchQuery: action.payload,
      };

    // Handling action for getting weather data
    case GETWEATHERDATA:
      return {
        ...state,
        data: action.payload,
      };

    // Handling action for getting autocomplete data
    case GETAUTOCOMPLETEDATA:
      return {
        ...state,
        autocompleteData: action.payload,
      };

    // Handling action for getting history data
    case GETHISTORYDATA:
      return {
        ...state,
        historyData: action.payload,
      };

    // Handling action for setting success message
    case SETSUCCESSMESSAGE:
      return {
        ...state,
        successMsg: action.payload,
      };

    // Handling action for setting error message
    case SETERRORMESSAGE:
      return {
        ...state,
        errorMsg: action.payload,
      };

    // Default case, returns the current state for unknown actions
    default:
      return state;
  }
};
