import React, { useEffect, useState } from "react";
import "./RightSection.css";
import { CiSearch } from "react-icons/ci";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import { useDispatch, useSelector } from "react-redux";
import { GETCURRENTLOCATION } from "../../Utilities/ReduxConstants/ReduxConstants";
import {
  getWeatherAutocompleteAction,
  getWeatherDetailsAction,
} from "../Actions/HomeAction";
import { weatherAutocompleteUrl, weatherBaseUrl } from "../../Utilities/Util";
import SeeForecastButton from "../SeeForecastButton/SeeForecastButton";

const RightSection = ({ weatherData, slide }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const autocompleteSuggestions = useSelector(
    (state) => state?.Home?.autocompleteData
  );
  console.log(autocompleteSuggestions, "suggestions");

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() !== "") {
      dispatch(
        getWeatherAutocompleteAction({
          weatherAutocompleteUrl,
          term,
        })
      );
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (setSearchTerm?.length !== 0 || setSearchTerm !== "") {
        dispatch({
          type: GETCURRENTLOCATION,
          payload: searchTerm,
        });
      }
    }
  };
  const handleSubmit = () => {
    if (setSearchTerm?.length !== 0 || setSearchTerm !== "") {
      dispatch({
        type: GETCURRENTLOCATION,
        payload: searchTerm,
      });
    }
  };

  useEffect(() => {
    setSuggestions(autocompleteSuggestions);
  }, [autocompleteSuggestions]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    dispatch(
      getWeatherDetailsAction({
        weatherBaseUrl,
        currentLocation: suggestion.name,
      })
    );
    // Clear suggestions
    setSuggestions([]);
  };

  return (
    <div className="rightSection">
      <div className="searchSection">
        <div className="autocomplete">
          <input
            onChange={(e) => handleInputChange(e)}
            placeholder="Search location"
            onKeyDown={handleKeyDown}
            value={searchTerm}
          />
          <div>
            <ul className="suggestion-list">
              {Array.isArray(suggestions?.data) && suggestions.data.length > 0
                ? suggestions.data.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name}, {suggestion.country}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <div className="serachIcon" onClick={handleSubmit}>
          <CiSearch />
        </div>
      </div>
      <WeatherDetails weatherData={weatherData} />
      <div>
        <SeeForecastButton onClick={slide} />
      </div>
    </div>
  );
};

export default RightSection;
