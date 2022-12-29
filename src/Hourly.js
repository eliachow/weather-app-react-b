import React, { useState } from "react";
import "./Hourly.css";
import Axios from "axios";
import WeatherIcon from "./WeatherIcon";
import Hour from "./Hour";

export default function Hourly(props) {
  let [loaded, setLoaded] = useState(false);
  let [hourlyData, setHourlyData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setHourlyData(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    console.log(hourlyData);
    return (
      <div className="Hourly">
        <h3 className="HourlyTitle">Hourly Forecast</h3>
        <div className="row">
          <div className="col-sm HourlyData">
            <Hour data={hourlyData[0]} />
          </div>
          <div className="col-sm HourlyData">
            <img src="/" alt=""></img>
            <div>Hour</div>
            <div>5 °C</div>
          </div>
          <div className="col-sm HourlyData">
            <img src="/" alt=""></img>
            <div>Hour</div>
            <div>5 °C</div>
          </div>
          <div className="col-sm HourlyData">
            <img src="/" alt=""></img>
            <div>Hour</div>
            <div>5 °C</div>
          </div>
          <div className="col-sm HourlyData">
            <img src="/" alt=""></img>
            <div>Hour</div>
            <div>5 °C</div>
          </div>
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
