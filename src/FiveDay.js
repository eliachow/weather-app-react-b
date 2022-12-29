import React, { useState } from "react";
import Axios from "axios";
import FiveData from "./FiveData";

export default function (props) {
  let [loaded, setLoaded] = useState(false);
  let [fiveDayData, setFiveDayData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setFiveDayData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(fiveDayData);
    return (
      <div className="FiveDay">
        <div>
          <ul className="EachDay">
            <li className="card">
              <div className="row">
                <FiveData data={fiveDayData[0]} />
              </div>
            </li>
          </ul>
          <ul className="EachDay">
            <li className="card">
              <div className="row">
                <div className="col-4 Day">{fiveDayData[0].dt}</div>
                <div className="col-4">
                  <div>{fiveDayData[0].weather[0].icon}</div>
                </div>
                <div className="col-4 DayTemp">{fiveDayData[0].temp.day}</div>
              </div>
            </li>
          </ul>
          <ul className="EachDay">
            <li className="card">
              <div className="row">
                <div className="col-4 Day">Sunday</div>
                <div className="col-4">
                  <img src="/" alt="/"></img>
                </div>
                <div className="col-4 DayTemp">5ᵒ</div>
              </div>
            </li>
          </ul>
          <ul className="EachDay">
            <li className="card">
              <div className="row">
                <div className="col-4 Day">Sunday</div>
                <div className="col-4">
                  <img src="/" alt="/"></img>
                </div>
                <div className="col-4 DayTemp">5ᵒ</div>
              </div>
            </li>
          </ul>
          <ul className="EachDay">
            <li className="card">
              <div className="row">
                <div className="col-4 Day">Sunday</div>
                <div className="col-4">
                  <img src="/" alt="/"></img>
                </div>
                <div className="col-4 DayTemp">5ᵒ</div>
              </div>
            </li>
          </ul>
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
