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
          {Math.round(props.kmh)} kph |{" "}
          <a href="/" onClick={convertToMph}>
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
          <a href="/" onClick={convertToKph}>
            kph
          </a>{" "}
          | mph
        </span>
      </span>
    );
  }
}
