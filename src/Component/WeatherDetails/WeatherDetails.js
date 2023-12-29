import React from "react";
import "./WeatherDetails.css";

// Component for displaying weather details
const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="weatherDetails">
      {/* Header */}
      <div className="weatherDetailsHeader">Weather Details</div>

      {/* Weather Condition Wrapper - Cloudy */}
      <div className="weatherConditionWraper">
        <div className="weatherConditionName">Cloudy</div>
        <div className="weatherConditionValue">
          {weatherData?.current?.cloud}
        </div>
      </div>

      {/* Weather Condition Wrapper - Humidity */}
      <div className="weatherConditionWraper">
        <div className="weatherConditionName">Humidity</div>
        <div className="weatherConditionValue">
          {weatherData?.current?.humidity}
        </div>
      </div>

      {/* Weather Condition Wrapper - Wind */}
      <div className="weatherConditionWraper">
        <div className="weatherConditionName">Wind</div>
        <div className="weatherConditionValue">
          {weatherData?.current?.wind_kph}km/h
        </div>
      </div>

      {/* Weather Condition Wrapper - Day */}
      <div className="weatherConditionWraper">
        <div className="weatherConditionName">Day</div>
        <div className="weatherConditionValue">
          {weatherData?.current?.is_day === 0 ? "No" : "Yes"}
        </div>
      </div>

      {/* Weather Condition Wrapper - Feels Like */}
      <div className="weatherConditionWraper">
        <div className="weatherConditionName">Feels Like</div>
        <div className="weatherConditionValue">
          {weatherData?.current?.feelslike_c}°
        </div>
      </div>

      {/* Weather Condition Wrapper - Wind Direction */}
      <div className="weatherConditionWraper">
        <div className="weatherConditionName">Wind Direction</div>
        <div className="weatherConditionValue">
          {weatherData?.current?.wind_dir}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
