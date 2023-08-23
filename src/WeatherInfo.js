import React from "react";
import "./WeatherInfo.css";
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
  console.log({ props });
  return (
    <div className="WeatherInfo ">
      <div className="CenterContent">
        <div className="row subCenterContent">
          <div className="col-7">
            <div className="MainData">
              <h1 className="MainCity">{props.data.city}</h1>
              <h3>
                <span>
                  <FormattedDate date={props.data.date} />
                </span>
              </h3>
              <div className="row MainIconAndData">
                <div className="col-5">
                  <div className="float-left MainWeatherIcon">
                    <WeatherIcon code={props.data.icon} />
                  </div>
                </div>
                <div className="col-6">
                  <WeatherTemperature celsius={props.data.temperature} />

                  <div>
                    <span>
                      <WiUmbrella size={40} color="white" />
                    </span>
                    <span className="text-capitalize">
                      {props.data.description}
                    </span>
                  </div>
                  <div>
                    <span>
                      <WiHumidity size={40} color="white" />
                    </span>
                    Humidity: <span>{props.data.humidity}%</span>
                  </div>
                  <div>
                    <span>
                      <WiCloudyGusts size={40} color="white" />
                    </span>
                    Wind Speed: <WindSpeed kmh={props.data.wind} />
                  </div>
                </div>
              </div>

              <Hourly coord={props.data.coord} />
            </div>
          </div>
          <div className="col-5">
            <div className="col-6">
              <h3 className="FiveDayTitle">5 Day Forecast</h3>
              <FiveDay coord={props.data.coord} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
