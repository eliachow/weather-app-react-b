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
      return <WiDaySunny size={200} color="white" />;
    case "01n":
      return <WiMoonAltNew size={200} color="white" />;
    case "02d":
      return <WiDayCloudy size={200} color="white" />;
    case "02n":
      return <WiDayCloudy size={200} color="white" />;
    case "03d":
      return <WiCloud size={200} color="white" />;
    case "03n":
      return <WiCloud size={200} color="white" />;
    case "04d":
      return <WiCloudy size={200} color="white" />;
    case "04n":
      return <WiCloudy size={200} color="white" />;
    case "09d":
      return <WiShowers size={200} color="white" />;
    case "09n":
      return <WiShowers size={200} color="white" />;
    case "10d":
      return <WiRain size={200} color="white" />;
    case "10n":
      return <WiRain size={200} color="white" />;
    case "11d":
      return <WiThunderstorm size={200} color="white" />;
    case "11n":
      return <WiThunderstorm size={200} color="white" />;
    case "13d":
      return <WiSnowflakeCold size={200} color="white" />;
    case "13n":
      return <WiSnowflakeCold size={200} color="white" />;
    case "50d":
      return <WiWindy size={200} color="white" />;
    case "50n":
      return <WiWindy size={200} color="white" />;
  }
}
