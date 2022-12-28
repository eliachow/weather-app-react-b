import React from "react";
import "./Hourly.css";
import Axios from "axios";

export default function Hourly(props) {
  let apiKey = "291d093572471cc9cd6958074405d546";
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&unit=metric`;

  Axios.get(apiURL).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="Hourly">
      <h3 className="HourlyTitle">Hourly Forecast</h3>
      <div className="row">
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
        <div className="col-sm HourlyData">
          <img src="/" alt=""></img>
          <div>Hour</div>
          <div>5 °C</div>
        </div>
      </div>
    </div>
  );
}
