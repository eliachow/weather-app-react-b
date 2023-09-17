import React, { useState } from "react";
import axios from "axios";
import "../styles/Content.css";
import WeatherInfo from "./WeatherInfo";
import cloudVideo from "../media/cloudVideo.mp4";


export default function Content(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [weatherUnit, setWeatherUnit] = useState("celsius")

  const apiKey = process.env.REACT_APP_API_KEY;

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

  // searchbar

  const search = async () => {
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
  
  // set city to searchbar value
  function handleCityChange(e) {
    setCity(e.target.value);
  }

  // current location

  const searchLocation = async (lat, lon) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    try {
      const response = await axios.get(apiUrl)
      const currentCity = response.data.name
      setCity(currentCity)
    } catch (error) {
      console.error("Error fetching weather data: ", error)
    }
  }


  function getLocation(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    searchLocation(lat, lon)
  }

  function fetchGeolocation() {
    navigator.geolocation.getCurrentPosition(getLocation)
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
                  className="form-control searchBarEntry"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={handleCityChange} 
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="form-control button-33"
                  role="button"
                  value={"Search"}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="form-control button-33"
                  value={"Current Location"}
                  onClick={fetchGeolocation}
                />
              </div>
            </form>   
          </div>
          <WeatherInfo data={weatherData} getWeatherUnit={getWeatherUnit} weatherUnit={weatherUnit}/>

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
