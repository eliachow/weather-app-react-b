import React, { useState } from "react";
import "../styles/WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const { getWeatherUnit } = props;
  const [unit, setUntit] = useState("celsius");
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUntit("fahrenheit");
    getWeatherUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUntit("celsius");
    getWeatherUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="MainTemp">{Math.round(props.celsius)} </span>
        <span className="Unit">
          ᵒC{" "}
          <a href="/" onClick={convertToFahrenheit} className="unitLink">
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
        <span className="Unit">
          ᵒF{" "}
          <a href="/" onClick={convertToCelsius} className="unitLink">
            ᵒC
          </a> 
        </span>
      </div>
    );
  }
}
