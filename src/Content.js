import React, { useState } from "react";
import "./Content.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import cloudVideo from "./media/cloudVideo.mp4";

export default function Content(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [weatherUnit, setWeatherUnit] = useState("celsius")

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

  const search = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl)
      handleResponse(response)
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      if (error.message === 'Request failed with status code 404') {
        alert ("Sorry, city not found. Please try again.")
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    // clear searchbar upon submit
    document.getElementById("searchValue").value = "";
  }
  

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  // update celsius & fahrenheit
  const getWeatherUnit = (unit) => {
    setWeatherUnit(unit)
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
                  id="searchValue"
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

            <WeatherInfo data={weatherData} getWeatherUnit={getWeatherUnit} weatherUnit={weatherUnit}/>
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
