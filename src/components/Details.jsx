import React from "react";

export default function Details({ city }) {
  return (
    <div>
      <h2>{city.name}</h2>
      <span>Temperature: {city.min}</span>
    </div>
  );
}
