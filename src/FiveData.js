import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FiveData.css";

export default function FiveData(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}ᵒ`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}ᵒ`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return weekdays[day];
  }

  return (
    <div className="FiveData">
      <span className="col-4 Day">{day()}</span>
      <span className="col-4 icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </span>
      <span className="col-4 DayTemp">
        {maxTemperature()} / {minTemperature()}
      </span>
    </div>
  );
}
