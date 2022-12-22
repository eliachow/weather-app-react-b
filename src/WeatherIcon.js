import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltNew } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiShowers } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiSnowflakeCold } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "WiDaySunny", //clear sky
    "01n": "WiMoonAltNew", //clear sky night
    "02d": "WiDayCloudy", //few clouds
    "02n": "WiDayCloudy", //few clouds night
    "03d": "WiCloud", //scattered clouds
    "03n": "WiCloud", //scattered clouds night
    "04d": "WiCloudy", //broken clouds
    "04n": "WiCloudy", //broken clouds night
    "09d": "WiShowers", //shower rain
    "09n": "WiShowers", //shower rain night
    "10d": "WiRain", //rain
    "10n": "WiRain", //rain night
    "11d": "WiThunderstorm", //thunderstorm
    "11n": "WiThunderstorm", //thunderstorm night
    "13d": "WiSnowflakeCold", //snow
    "13n": "WiSnowflakeCold", //snow night
    "50d": "WiWindy", //mist
    "50n": "WiWindy", //mist night
  };

  return <${codeMapping[props.code]} size={24} color="#000" />;
}
