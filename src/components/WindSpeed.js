import React, { useState } from "react";

export default function WindSpeed(props) {
  const [windUnit, setWindUnit] = useState("kph");

  function convertToMph(event) {
    event.preventDefault();
    setWindUnit("mph");
  }

  function convertToKph(event) {
    event.preventDefault();
    setWindUnit("kph");
  }

  if (windUnit === "kph") {
    return (
      <span className="WindSpeed">
        <span>
          {Math.round(props.kmh)} km/h{" "}
          <a href="/" onClick={convertToMph} className="unitLink">
            mph
          </a>
        </span>
      </span>
    );
  } else {
    let mph = props.kmh / 1.609;
    return (
      <span className="WindSpeed">
        <span>
          {Math.round(mph)}{" "}
          mph{" "}
          <a href="/" onClick={convertToKph} className="unitLink">
            km/h
          </a>
        </span>
      </span>
    );
  }
}
