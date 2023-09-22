import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function FiveData(props) {
  const { weatherUnit } = props;

  function maxTemperatureCelsius() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}ᵒC`;
  }

  function minTemperatureCelsius() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}ᵒC`;
  }

  function maxTemperatureFahrenheit () {
    let maxTemp = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${maxTemp}ᵒF`;
  }

  function minTemperatureFahrenheit() {
    let minTemp = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${minTemp}ᵒF`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let weekdays = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    return weekdays[day];
  }

  return (
    <div className="FiveData">
      <span className="col-4 Day">{day()}</span>
      <span className="col-4 FiveDayIcon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </span>
      <span className="col-4 DayTemp">
        {weatherUnit === "celsius" ? (
          <>
          {maxTemperatureCelsius()}
          <br />
          {minTemperatureCelsius()}
          </>  
        ) : (
          <>
          {maxTemperatureFahrenheit()}
          <br />
          {minTemperatureFahrenheit()}
          </>  
        )}
      </span>
    </div>
  );
}
