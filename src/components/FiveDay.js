import React, { useEffect, useState } from "react";
import Axios from "axios";
import FiveData from "./FiveData";

export default function FiveDay(props) {
  const { weatherUnit } = props;
  let [loaded, setLoaded] = useState(false);
  let [fiveDayData, setFiveDayData] = useState(null);

  function handleResponse(response) {
    setFiveDayData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  },[props.coord])

  if (loaded) {
    return (
      <div className="FiveDay">
        <div>
          <ul className="EachDay">
            {fiveDayData.map((dailyForecast, index) => {
              if (index < 5) {
              return(
              <li className="card FiveDayCard" key={index}>
                <div className="row FiveContent">
                  <FiveData data={dailyForecast} weatherUnit={weatherUnit}/>
                </div>
              </li>
            )} else {
              return null;
            }})}
          </ul> 
        </div>
      </div>
    );
  } else {
    let apiKey = process.env.REACT_APP_API_KEY;
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    Axios.get(apiURL).then(handleResponse);
    return null;
  }
}
