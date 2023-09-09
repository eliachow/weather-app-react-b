import React, { useEffect, useState } from "react";
import "../styles/WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WindSpeed from "./WindSpeed";
import Hourly from "./Hourly";
import FiveDay from "./FiveDay";

import { WiHumidity } from "weather-icons-react";
import { WiUmbrella } from "weather-icons-react";
import { WiCloudyGusts } from "weather-icons-react";

export default function WeatherInfo(props) {
  const { data, getWeatherUnit, weatherUnit } = props

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // fetch current date/time
  function updateCurrentDateTime() {
    setCurrentDateTime(new Date());
  }

  useEffect(() => {
    updateCurrentDateTime();
  },[data])

  return (
    <div className="WeatherInfo ">
      <div className="CenterContent">
        <div className="row subCenterContent">
          <div className="col-7">
            <div className="MainData">
              <h1 className="MainCity">{data.city}</h1>
              <h3>
                <span>
                  <FormattedDate date={currentDateTime} />
                </span>
              </h3>
              <div className="row MainIconAndData">
                <div className="col-5">
                  <div className="float-left MainWeatherIcon">
                    <WeatherIcon code={data.icon} />
                  </div>
                </div>
                <div className="col-6">
                  <WeatherTemperature celsius={data.temperature} getWeatherUnit={getWeatherUnit} />

                  <div className="currentDetails">
                    <span>
                      <WiUmbrella size={40} color="white" />
                    </span>
                    <span className="text-capitalize">
                      {data.description}
                    </span>
                  </div>
                  <div className="currentDetails">
                    <span>
                      <WiHumidity size={40} color="white" />
                    </span>
                    Humidity: <span>{data.humidity}%</span>
                  </div>
                  <div className="currentDetails">
                    <span>
                      <WiCloudyGusts size={40} color="white" />
                    </span>
                    Wind Speed: <WindSpeed kmh={data.wind} />
                  </div>
                </div>
              </div>

              <Hourly coord={data.coord} weatherUnit={weatherUnit}/>
            </div>
          </div>
          <div className="col-5">
            <div className="col-6 FiveDaySection">
              <h3 className="FiveDayTitle">5 Day Forecast</h3>
              <FiveDay coord={data.coord} weatherUnit={weatherUnit}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}