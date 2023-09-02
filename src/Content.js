import React, { useState } from "react";
import "./Content.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import cloudVideo from "./media/cloudVideo.mp4";

export default function Content(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "291d093572471cc9cd6958074405d546";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Content">
        <div className="video-wrapper">
          <video src={cloudVideo} autoPlay loop muted />
        </div>
        <div className="PageContent">
          <div className="Header">
            <div className="HeaderTitle">Weather Watch</div>
            <form className="row SearchBar" onSubmit={handleSubmit}>
              <div className="col-6">
                <input
                  type="search"
                  className="form-control button"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="form-control button"
                  value={"Search"}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="form-control button"
                  value={"Current Location"}
                />
              </div>
            </form>

            <WeatherInfo data={weatherData} />
          </div>
        
        <footer>
            Open source code by 
            {" "}
          <a
            href="https://github.com/eliachow/weather-app-react-b"
            target="_blank"
            rel="noopener noreferrer"
            className="nameLink">
            eChow
          </a>
          
        </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
