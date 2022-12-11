import React, { useState } from "react";
import "./Content.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import cloudVideo from "./media/cloudVideo.mp4";

export default function Content(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
        <video src={cloudVideo} autoPlay loop muted />
        <div className="PageContent">
          <div className="Header">
            <div className="HeaderTitle">Weather Forecast App</div>
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
              <div class="col-3">
                <input
                  type="submit"
                  className="form-control button"
                  value={"Current Location"}
                />
              </div>
            </form>

            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
