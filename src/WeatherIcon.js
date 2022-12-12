import React from "react";
import { WiDayWindy } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiShowers } from "react-icons/wi";
import { WiSWiRainhowers } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiSnowflakeCold } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "WiDaySunny", //clear sky
    "02d": "WiDayCloudy", //few clouds
    "03d": "WiCloud", //scattered clouds
    "04d": "WiCloudy", //broken clouds
    "09d": "WiShowers", //shower rain
    "10d": "WiRain", //rain
    "11d": "WiThunderstorm", //thunderstorm
    "13d": "WiSnowflakeCold", //snow
    "50d": "WiWindy", //mist
  };
  let WeatherIconFinal = codeMapping[props.code];

  return <div className="WeatherIcon">{WeatherIconFinal};</div>;
}
