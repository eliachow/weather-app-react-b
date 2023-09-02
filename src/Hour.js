import React from "react";
//AKA WeatherForecastDay.js
import WeatherIcon from "./WeatherIcon";
import "./Hour.css";

export default function Hour(props) {
  function celsius() {
    let celsiusTemperature = Math.round(props.data.temp);
    return celsiusTemperature;
  }


  function convertTime(timeStampInSecs) {
    const newTime = new Date(timeStampInSecs * 1000)

    const hours = newTime.getHours();
    const minutes = newTime.getMinutes();

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    return formattedTime;
  }

  return (
    <div className="Hour">
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div>{convertTime(props.data.dt)}</div>
      <div>{celsius()} °C</div>
    </div>
  );
}
