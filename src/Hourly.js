import React, { useState } from "react";
import "./Hourly.css";
import Axios from "axios";
import WeatherIcon from "./WeatherIcon";
import Hour from "./Hour";

export default function Hourly(props) {
  const { weatherUnit } = props;
  let [loaded, setLoaded] = useState(false);
  let [hourlyData, setHourlyData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setHourlyData(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Hourly">
        <h3 className="HourlyTitle">Hourly Forecast</h3>
        <div className="row">
          {hourlyData.map((hourlyForecast, index) => {
            if (index > 0 && index < 8) {
              return (<div className="col-sm HourlyData" key={index}>
                <Hour data={hourlyForecast} weatherUnit={weatherUnit}/>
              </div>
          )}})}
         
        </div>
      </div>
    );
  } else {
    let apiKey = "291d093572471cc9cd6958074405d546";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    Axios.get(apiURL).then(handleResponse);
    return null;
  }
}
