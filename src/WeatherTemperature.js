import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUntit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUntit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUntit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="MainTemp">{Math.round(props.celsius)} </span>
        <span>
          ᵒC |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ᵒF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="MainTemp">{Math.round(fahrenheit)} </span>
        <span>
          <a href="/" onClick={convertToCelsius}>
            ᵒC
          </a>{" "}
          | ᵒF
        </span>
      </div>
    );
  }
}
