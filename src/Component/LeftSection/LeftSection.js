import React from "react";
import "./LeftSection.css";

const LeftSection = ({ weatherData }) => {
  return (
    <div className="leftSection">
      {/* Logo and Branding */}
      <div className="logoText">the.weather</div>

      {/* Current Location Details */}
      <div className="currentLocationDetails">
        {/* Displaying Current Temperature */}
        <div className="weatherdegree">{weatherData?.current?.temp_c}°</div>

        {/* Location, Time, and Date Details */}
        <div className="LocationWeatherDetails">
          {/* Location Name */}
          <div className="locationName">{weatherData?.location?.name}</div>

          {/* Weather Time and Date */}
          <div className="weatherTimeAndDate">
            {weatherData?.location?.localtime}
          </div>

          {/* Current Weather Status */}
          <div className="weatherCurrentStatus">
            {weatherData?.current?.condition?.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
