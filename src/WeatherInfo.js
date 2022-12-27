import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import { WiHumidity } from "weather-icons-react";
import { WiUmbrella } from "weather-icons-react";
import { WiCloudyGusts } from "weather-icons-react";

export default function WeatherInfo(props) {
  console.log({ props });
  return (
    <div className="WeatherInfo ">
      <div className="CenterContent">
        <div className="row">
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
                  <div className="float-left">
                    <WeatherIcon code={props.data.icon} />
                  </div>
                </div>
                <div className="col-6">
                  <span className="MainTemp">
                    {Math.round(props.data.temperature)}{" "}
                  </span>
                  <span>ᵒC</span> | <span>ᵒF</span>
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
                    Wind Speed: <span>{Math.round(props.data.wind)} kmh</span>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="Hourly">
                <h3 className="HourlyTitle">Hourly Forecast</h3>
                <div className="row">
                  <div className="col-sm HourlyData">
                    <img
                      src={props.data.iconUrl}
                      alt={props.data.description}
                    ></img>
                    <div>Hour</div>
                    <div>5 °C</div>
                  </div>
                  <div className="col-sm HourlyData">
                    <img
                      src={props.data.iconUrl}
                      alt={props.data.description}
                    ></img>
                    <div>Hour</div>
                    <div>5 °C</div>
                  </div>
                  <div className="col-sm HourlyData">
                    <img
                      src={props.data.iconUrl}
                      alt={props.data.description}
                    ></img>
                    <div>Hour</div>
                    <div>5 °C</div>
                  </div>
                  <div className="col-sm HourlyData">
                    <img
                      src={props.data.iconUrl}
                      alt={props.data.description}
                    ></img>
                    <div>Hour</div>
                    <div>5 °C</div>
                  </div>
                  <div className="col-sm HourlyData">
                    <img
                      src={props.data.iconUrl}
                      alt={props.data.description}
                    ></img>
                    <div>Hour</div>
                    <div>5 °C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="col-6">
              <h3 className="FiveDayTitle">5 Day Forecast</h3>
              <div>
                <ul className="EachDay">
                  <li className="card">
                    <div className="row">
                      <div className="col-4 Day">Sunday</div>
                      <div className="col-4">
                        <img
                          src={props.data.iconUrl}
                          alt={props.data.description}
                        ></img>
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
                        <img
                          src={props.data.iconUrl}
                          alt={props.data.description}
                        ></img>
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
                        <img
                          src={props.data.iconUrl}
                          alt={props.data.description}
                        ></img>
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
                        <img
                          src={props.data.iconUrl}
                          alt={props.data.description}
                        ></img>
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
                        <img
                          src={props.data.iconUrl}
                          alt={props.data.description}
                        ></img>
                      </div>
                      <div className="col-4 DayTemp">5ᵒ</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
