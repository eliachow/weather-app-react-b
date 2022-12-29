import React from "react";
//AKA WeatherForecastDay.js
import WeatherIcon from "./WeatherIcon";
import "./Hour.css";

export default function Hour(props) {
  function celsius() {
    let celsiusTemperature = Math.round(props.data.temp);
    return celsiusTemperature;
  }

  function convertTime() {
    let newTime = new Date(props.data.dt * 60);
    let time = newTime.getHours();
    return time;
  }

  return (
    <div className="Hour">
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div>{convertTime()}</div>
      <div>{celsius()} °C</div>
    </div>
  );
}
