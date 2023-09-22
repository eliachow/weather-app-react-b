import React, { useState } from "react";

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
        <span className="MainTemp">{Math.round(props.celsius)}ᵒ </span>
        <span className="Unit">
          C{" "}
          <a href="/" onClick={convertToFahrenheit} className="unitLink">
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="MainTemp">{Math.round(fahrenheit)}ᵒ </span>
        <span className="Unit">
          F{" "}
          <a href="/" onClick={convertToCelsius} className="unitLink">
            C
          </a> 
        </span>
      </div>
    );
  }
}
