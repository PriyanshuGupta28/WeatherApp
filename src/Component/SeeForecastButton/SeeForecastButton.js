import React from "react";

// Functional component for a "See Forecast" button
const SeeForecastButton = ({ onClick }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        fontSize: "1.5rem",
        marginTop: "5rem",
      }}
      onClick={onClick}
    >
      See Forecast
    </div>
  );
};

export default SeeForecastButton;
