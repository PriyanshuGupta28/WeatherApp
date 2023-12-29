import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherHistoryAction } from "../Actions/HomeAction";
import { weatherHistoryUrl } from "../../Utilities/Util";
import "./ForecastDays.css";

const ForecastDays = () => {
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state?.Home?.searchQuery);
  const historyData = useSelector((state) => state?.Home?.historyData);
  console.log(historyData, "historyData");

  // Function to get today's date and the date 7 days ago
  const getTodayAnd7DaysAgo = () => {
    const currentDate = new Date();
    const today = currentDate.toISOString().split("T")[0];

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);
    const sevenDaysAgoFormatted = sevenDaysAgo.toISOString().split("T")[0];

    return { today, sevenDaysAgo: sevenDaysAgoFormatted };
  };

  const { today, sevenDaysAgo } = getTodayAnd7DaysAgo();
  console.log(today, sevenDaysAgo);

  // Function to dispatch the action to get historical weather data
  const getHistoryData = () => {
    dispatch(
      getWeatherHistoryAction({
        currentLocation,
        weatherHistoryUrl,
        today,
        sevenDaysAgo,
      })
    );
  };

  // Effect hook to fetch history data when the current location changes
  useEffect(() => {
    getHistoryData();
  }, [currentLocation]);

  return (
    <div id="forecastDays" className="forecastRoot">
      <div className="forecastday">
        {/* Rendering data for the first forecast day (index 0) */}
        <div>{defaultData?.forecast?.forecastday[0]?.date}</div>
        <div>
          <img
            src={defaultData?.forecast?.forecastday[0]?.day?.condition?.icon}
            alt={defaultData?.forecast?.forecastday[0]?.day?.condition?.text}
          />
        </div>
        <div>{defaultData?.forecast?.forecastday[0]?.day?.condition?.text}</div>
      </div>
    </div>
  );
};

export default ForecastDays;

const defaultData = {
  location: {
    name: "New York",
    region: "New York",
    country: "United States of America",
    lat: 40.71,
    lon: -74.01,
    tz_id: "America/New_York",
    localtime_epoch: 1658522976,
    localtime: "2022-07-22 16:49",
  },
  forecast: {
    forecastday: [
      {
        date: "2022-07-22",
        date_epoch: 1658448000,
        day: {
          maxtemp_c: 35.9,
          maxtemp_f: 96.6,
          mintemp_c: 26.3,
          mintemp_f: 79.3,
          avgtemp_c: 30.7,
          avgtemp_f: 87.3,
          maxwind_mph: 12.8,
          maxwind_kph: 20.5,
          totalprecip_mm: 0,
          totalprecip_in: 0,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 53,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000,
          },
          uv: 8,
        },
        astro: {
          sunrise: "05:44 AM",
          sunset: "08:20 PM",
          moonrise: "12:58 AM",
          moonset: "03:35 PM",
          moon_phase: "Last Quarter",
          moon_illumination: "36",
        },
        hour: [
          {
            time_epoch: 1658462400,
            time: "2022-07-22 00:00",
            temp_c: 28.7,
            temp_f: 83.7,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.4,
            wind_kph: 15.1,
            wind_degree: 265,
            wind_dir: "W",
            pressure_mb: 1007,
            pressure_in: 29.73,
            precip_mm: 0,
            precip_in: 0,
            humidity: 58,
            cloud: 19,
            feelslike_c: 30.5,
            feelslike_f: 86.9,
            windchill_c: 28.7,
            windchill_f: 83.7,
            heatindex_c: 30.5,
            heatindex_f: 86.9,
            dewpoint_c: 19.6,
            dewpoint_f: 67.3,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 15,
            gust_kph: 24.1,
            uv: 1,
          },
        ],
      },
    ],
  },
};
