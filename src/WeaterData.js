import React from "react";
import axios from "axios";

export default function WeatherData() {
  function handleResponse(response) {
    console.log(response.data.main);
  }

  const apiKey = "291d093572471cc9cd6958074405d546";
  let city = "Vancouver";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);
}
