# Weather App

Overview:
The Weather App is a React-based web application that allows users to check the current weather conditions for a given location. It provides real-time weather information, including temperature, humidity, wind speed, and more.

Project Structure:
lua
Copy code
|-- src
| |-- Components
| |-- LeftSection
| |-- LeftSection.js
| |-- LeftSection.css
| |-- RightSection
| |-- RightSection.js
| |-- RightSection.css
| |-- WeatherDetails
| |-- WeatherDetails.js
| |-- WeatherDetails.css
| |-- SeeForecastButton
| |-- SeeForecastButton.js
|-- Actions
| |-- HomeAction.js
|-- Reducers
| |-- HomeReducer.js
|-- Utilities
| |-- ReduxConstants
| |-- ReduxConstants.js
| |-- Util.js
|-- App.js
|-- index.js
|-- ...
Getting Started:
Clone the Repository:

bash
Copy code
git clone https://github.com/priyanshugupta28/weather-app.git
cd weather-app
Install Dependencies:

bash
Copy code
npm install
Set API Key:

Obtain a free API key from WeatherAPI.
Create a .env file in the project root.
Add your API key to the .env file:
env

REACT_APP_API_KEY=your-api-key
Run the Application:

bash
Copy code
npm start
Open in Browser:
Open your browser and visit http://localhost:3000 to view the Weather App.

Features:
Current Weather Display:

Real-time temperature, humidity, wind speed, and more.
Location Search:

Search for weather information by location.
Forecast:

View a forecast for the upcoming days.
Technologies Used:
React
Redux (for state management)
Axios (for API requests)
React Icons (for icons)
React Toastify (for notifications)
Notes:

Ensure that you have a stable internet connection, as the app relies on external APIs to fetch weather data.
