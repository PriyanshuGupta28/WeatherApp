import axios from "axios";
import {
  GETAUTOCOMPLETEDATA,
  GETCURRENTLOCATION,
  GETHISTORYDATA,
  GETWEATHERDATA,
  SETERRORMESSAGE,
  SETSUCCESSMESSAGE,
} from "../../Utilities/ReduxConstants/ReduxConstants";
import { key } from "../../Utilities/Util";

// Action to get the current location based on IP address
export const getCurrentLocationAction =
  ({ ipinfoUrl }) =>
  async (dispatch) => {
    try {
      const response = await axios.get(ipinfoUrl);
      // Dispatching action to update the current location in the Redux state
      dispatch({
        type: GETCURRENTLOCATION,
        payload: response?.data?.city,
      });

      console.log(response?.data?.city);
    } catch (error) {
      console.log(error);
    } finally {
      // Optional: Any code that needs to be executed regardless of success or failure
    }
  };

// Action to get weather details for the current location
export const getWeatherDetailsAction =
  ({ weatherBaseUrl, currentLocation }) =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `${weatherBaseUrl}&q=${currentLocation}`
      );
      // Dispatching actions to update success message and weather data in the Redux state
      dispatch({
        type: SETSUCCESSMESSAGE,
        payload: `Current Location ${response?.data?.city}`,
      });
      dispatch({
        type: GETWEATHERDATA,
        payload: response,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      // Dispatching action to update error message in the Redux state
      dispatch({
        type: SETERRORMESSAGE,
        payload: `Error While Fetching Data: ${error?.message}`,
      });
    } finally {
      // Optional: Any code that needs to be executed regardless of success or failure
    }
  };

// Action to get autocomplete data for weather search
export const getWeatherAutocompleteAction =
  ({ weatherAutocompleteUrl, term }) =>
  async (dispatch) => {
    try {
      if (term !== "") {
        const response = await axios.get(
          `${weatherAutocompleteUrl}?q=${term}&key=${key}`
        );
        console.log(response, "getWeatherAutocompleteAction");
        // Dispatching action to update autocomplete data in the Redux state
        dispatch({
          type: GETAUTOCOMPLETEDATA,
          payload: response,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      // Optional: Any code that needs to be executed regardless of success or failure
    }
  };

// Action to get weather history data
export const getWeatherHistoryAction =
  ({ currentLocation, weatherHistoryUrl, today, sevenDaysAgo }) =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `${weatherHistoryUrl}?q=${currentLocation}&dt=${today}&end_dt=${sevenDaysAgo}&key=${key}`
      );
      console.log(response, "getWeatherHistoryAction");
      // Dispatching action to update weather history data in the Redux state
      dispatch({
        type: GETHISTORYDATA,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    } finally {
      // Optional: Any code that needs to be executed regardless of success or failure should be here
    }
  };
