import React, { useState } from "react";
import Axios from "axios";
import FiveData from "./FiveData";

export default function (props) {
  const { weatherUnit } = props;
  let [loaded, setLoaded] = useState(false);
  let [fiveDayData, setFiveDayData] = useState(null);

  function handleResponse(response) {
    setFiveDayData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="FiveDay">
        <div>
          <ul className="EachDay">
            {fiveDayData.map((dailyForecast, index) => {
              if (index < 5) {
              return(
              <li className="card FiveDayCard">
                <div className="row" key={index}>
                  <FiveData data={dailyForecast} weatherUnit={weatherUnit}/>
                </div>
              </li>
            )}})}
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
