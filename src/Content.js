import React from "react";
import "./Content.css";
import cloudVideo from "./media/cloudVideo.mp4";
import { WiHumidity } from "weather-icons-react";
import { WiUmbrella } from "weather-icons-react";
import { WiCloudyGusts } from "weather-icons-react";
import { WiDaySnow } from "weather-icons-react";

export default function Content() {
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
                  <h1>Vancouver</h1>
                  <h3>
                    <span>Date</span>
                    <span>Time</span>
                  </h3>
                  <div className="row">
                    <div className="col-5">
                      <img />
                      <WiDaySnow size={90} color="white" />
                    </div>
                    <div className="col-6">
                      <span className="MainTemp">6 </span>
                      <span>ᵒC</span> | <span>ᵒF</span>
                      <div>
                        <span>
                          <WiUmbrella size={40} color="white" />
                        </span>
                        Description: <span>Partially Cloudy</span>
                      </div>
                      <div>
                        <span>
                          <WiHumidity size={40} color="white" />
                        </span>
                        Humidity: <span>3%</span>
                      </div>
                      <div>
                        <span>
                          <WiCloudyGusts size={40} color="white" />
                        </span>
                        Wind Speed: <span>4 kmh</span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="Hourly">
                    <h3>Hourly Forecast</h3>
                    <div className="row">
                      <div className="col-sm HourlyData">
                        <img></img>
                        <div>Hour</div>
                        <div>5 °C</div>
                      </div>
                      <div className="col-sm HourlyData">
                        <img></img>
                        <div>Hour</div>
                        <div>5 °C</div>
                      </div>
                      <div className="col-sm HourlyData">
                        <img></img>
                        <div>Hour</div>
                        <div>5 °C</div>
                      </div>
                      <div className="col-sm HourlyData">
                        <img></img>
                        <div>Hour</div>
                        <div>5 °C</div>
                      </div>
                      <div className="col-sm HourlyData">
                        <img></img>
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
                        <span>Sunday</span>
                        <img></img>
                        <span>5ᵒ</span>
                      </li>
                    </ul>
                    <ul className="EachDay">
                      <li className="card">
                        <span>Sunday</span>
                        <img></img>
                        <span>5ᵒ</span>
                      </li>
                    </ul>
                    <ul className="EachDay">
                      <li className="card">
                        <span>Sunday</span>
                        <img></img>
                        <span>5ᵒ</span>
                      </li>
                    </ul>
                    <ul className="EachDay">
                      <li className="card">
                        <span>Sunday</span>
                        <img></img>
                        <span>5ᵒ</span>
                      </li>
                    </ul>
                    <ul className="EachDay">
                      <li className="card">
                        <span>Sunday</span>
                        <img></img>
                        <span>5ᵒ</span>
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
}
