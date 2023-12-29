import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  getCurrentLocationAction,
  getWeatherDetailsAction,
} from "../../Component/Actions/HomeAction";
import ForecastDays from "../../Component/ForecastDays/ForecastDays";
import LeftSection from "../../Component/LeftSection/LeftSection";
import RightSection from "../../Component/RightSection/RightSection";
import { ipinfoUrl, weatherBaseUrl } from "../../Utilities/Util";
import "./Home.css";

const Home = () => {
  // Redux hooks
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state?.Home?.searchQuery);
  const weatherData = useSelector((state) => state?.Home?.data);
  const sucessMsg = useSelector((state) => state?.Home?.sucessMsg);
  const errorMsg = useSelector((state) => state?.Home?.errorMsg);

  // Background image
  const bg = "https://wallpapercave.com/wp/wp5600009.jpg";

  // Function to handle 'See Forecast' button click
  const handleSeeForecastClick = () => {
    const forecastDaysElement = document.getElementById("forecastDays");

    if (forecastDaysElement) {
      forecastDaysElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Styles for the root element
  const homeRootStyle = {
    backgroundImage: `url(${bg})`,
  };

  // Function to get current location and weather details
  const getCurrentLocation = () => {
    dispatch(getCurrentLocationAction({ ipinfoUrl }));
    getWeatherDetails();
  };

  // Function to get weather details
  const getWeatherDetails = () => {
    dispatch(getWeatherDetailsAction({ weatherBaseUrl, currentLocation }));
  };

  // Effect hook to get current location on component mount
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Effect hook to get weather details when current location changes
  useEffect(() => {
    getWeatherDetails();
  }, [currentLocation]);

  // Render the component
  return (
    <div>
      {/* Root container with background image */}
      <div className="homeRoot" style={homeRootStyle}>
        {/* Left section displaying weather data */}
        <LeftSection weatherData={weatherData?.data} />
        {/* Right section with 'See Forecast' button */}
        <RightSection
          weatherData={weatherData?.data}
          slide={handleSeeForecastClick}
        />
      </div>
      {/* Component displaying forecast days */}
      <ForecastDays />
    </div>
  );
};

export default Home;
