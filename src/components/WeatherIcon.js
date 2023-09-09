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
  switch (props.code) {
    case "01d":
      return <WiDaySunny />;
    case "01n":
      return <WiMoonAltNew />;
    case "02d":
      return <WiDayCloudy />;
    case "02n":
      return <WiDayCloudy />;
    case "03d":
      return <WiCloud />;
    case "03n":
      return <WiCloud />;
    case "04d":
      return <WiCloudy />;
    case "04n":
      return <WiCloudy />;
    case "09d":
      return <WiShowers />;
    case "09n":
      return <WiShowers />;
    case "10d":
      return <WiRain />;
    case "10n":
      return <WiRain />;
    case "11d":
      return <WiThunderstorm />;
    case "11n":
      return <WiThunderstorm />;
    case "13d":
      return <WiSnowflakeCold />;
    case "13n":
      return <WiSnowflakeCold />;
    case "50d":
      return <WiWindy />;
    case "50n":
      return <WiWindy />;
    default:
      return null;
  }
}
