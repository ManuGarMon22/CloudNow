import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Details from "./components/Details.jsx";
import { Route, Switch } from "react-router-dom";

export default function App() {
  var [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    if (ciudad === "") {
      alert("Por favor ingrese una ciudad en la barra de busqueda");
    } else {
      let apiKey = "bd1c01c112a39203cf62907f6423a754";
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad} &appid=${apiKey}&units=metric`
      )
        .then((r) => r.json())
        .then((data) => {
          const ciudadEjemplo = {
            min: data.main.temp_min,
            max: data.main.temp_max,
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          console.log(ciudadEjemplo.img);
          if (!cities.find((x) => x.name === ciudadEjemplo.name)) {
            setCities((oldCities) => [...oldCities, ciudadEjemplo]);
          }
        })
        .catch((error) => alert("Error con la api: " + error));
    }
  }

  function onClose(id) {
    setCities((r) => r.filter((c) => c.id !== id));
  }

  function findCity(idCity) {
    let city = cities.filter((y) => y.id === parseInt(idCity));
    return city[0];
  }

  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch} />
      <Switch>
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>
        <Route path="/about">
          <Cards onClose={onClose} />
        </Route>
        {/*Aqui flata el route para la especificaciones de las ciudades*/}
        <Route
          path="/ciudad/:id"
          render={({ match }) => <Details city={findCity(match.params.id)} />}
        ></Route>
      </Switch>
    </div>
  );
}
