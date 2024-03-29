import React from "react";
//AKA WeatherForecastDay.js
import WeatherIcon from "./WeatherIcon";

export default function Hour(props) {
  const { weatherUnit } = props;

  function celsius() {
    let celsiusTemperature = Math.round(props.data.temp);
    return celsiusTemperature;
  }

  function fahrenheit() {
    let fahrenheitTemperature = Math.round((props.data.temp * 9)/ 5 + 32)
    return fahrenheitTemperature
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
      <div className="HourlyInfo">{convertTime(props.data.dt)}</div>
      {weatherUnit === "celsius" ? (
        <div className="HourlyInfo">{celsius()} °C</div>
      ) : <div className="HourlyInfo">{fahrenheit()} °F</div>}
    </div>
  );
}
