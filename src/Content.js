import React, { useState } from "react";
import "./Content.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import cloudVideo from "./media/cloudVideo.mp4";
import { WiHumidity } from "weather-icons-react";
import { WiUmbrella } from "weather-icons-react";
import { WiCloudyGusts } from "weather-icons-react";

export default function Content() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Content">
        <video src={cloudVideo} autoPlay loop muted />
        <div className="PageContent">
          <div className="Header">
            <div className="HeaderTitle">Weather Forecast App</div>
            <form className="row SearchBar">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control button"
                  placeholder="Enter a city"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="form-control button"
                  value={"Search"}
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  className="form-control button"
                  value={"Current Location"}
                />
              </div>
            </form>

            <div className="CenterContent">
              <div className="row">
                <div className="col-7">
                  <div className="MainData">
                    <h1>{weatherData.city}</h1>
                    <h3>
                      <span>
                        <FormattedDate date={weatherData.date} />
                      </span>
                    </h3>
                    <div className="row">
                      <div className="col-5">
                        <img
                          src={weatherData.iconUrl}
                          alt={weatherData.description}
                        ></img>
                      </div>
                      <div className="col-6">
                        <span className="MainTemp">
                          {Math.round(weatherData.temperature)}{" "}
                        </span>
                        <span>ᵒC</span> | <span>ᵒF</span>
                        <div>
                          <span>
                            <WiUmbrella size={40} color="white" />
                          </span>
                          <span className="text-capitalize">
                            {weatherData.description}
                          </span>
                        </div>
                        <div>
                          <span>
                            <WiHumidity size={40} color="white" />
                          </span>
                          Humidity: <span>{weatherData.humidity}%</span>
                        </div>
                        <div>
                          <span>
                            <WiCloudyGusts size={40} color="white" />
                          </span>
                          Wind Speed:{" "}
                          <span>{Math.round(weatherData.wind)} kmh</span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="Hourly">
                      <h3>Hourly Forecast</h3>
                      <div className="row">
                        <div className="col-sm HourlyData">
                          <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
                          ></img>
                          <div>Hour</div>
                          <div>5 °C</div>
                        </div>
                        <div className="col-sm HourlyData">
                          <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
                          ></img>
                          <div>Hour</div>
                          <div>5 °C</div>
                        </div>
                        <div className="col-sm HourlyData">
                          <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
                          ></img>
                          <div>Hour</div>
                          <div>5 °C</div>
                        </div>
                        <div className="col-sm HourlyData">
                          <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
                          ></img>
                          <div>Hour</div>
                          <div>5 °C</div>
                        </div>
                        <div className="col-sm HourlyData">
                          <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
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
                    <h3>5 Day Forecast</h3>
                    <div>
                      <ul className="EachDay">
                        <li className="card">
                          <div className="row">
                            <div className="col-4 day">Sunday</div>
                            <div className="col-4">
                              <img
                                src={weatherData.iconUrl}
                                alt={weatherData.description}
                              ></img>
                            </div>
                            <div className="col-4">5ᵒ</div>
                          </div>
                        </li>
                      </ul>
                      <ul className="EachDay">
                        <li className="card">
                          <span>
                            Sunday
                            <img
                              src={weatherData.iconUrl}
                              alt={weatherData.description}
                            ></img>
                            5ᵒ
                          </span>
                        </li>
                      </ul>
                      <ul className="EachDay">
                        <li className="card">
                          <span>
                            Sunday
                            <img
                              src={weatherData.iconUrl}
                              alt={weatherData.description}
                            ></img>
                            5ᵒ
                          </span>
                        </li>
                      </ul>
                      <ul className="EachDay">
                        <li className="card">
                          <span>
                            Sunday
                            <img
                              src={weatherData.iconUrl}
                              alt={weatherData.description}
                            ></img>
                            5ᵒ
                          </span>
                        </li>
                      </ul>
                      <ul className="EachDay">
                        <li className="card">
                          <span>
                            Sunday
                            <img
                              src={weatherData.iconUrl}
                              alt={weatherData.description}
                            ></img>
                            5ᵒ
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "291d093572471cc9cd6958074405d546";
    let city = "Vancouver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
