import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Switch se encarga de renderizar únicamente las rutas que cumplan el path indicado, evitando así que se rendericen varias Routes que coicidan
import Details from "./Details";
//Para ignorar el linter y decirle que React es un elemento global

import SearchParams from "./SearchParams";

// Componente - Se trata de un molde que permite crear nuevos componentes
// Devuelve lo que se resuelve de Reac.createElement()
// En este punto hemos creado el componente, pero no lo hemos usado todavía
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, {
//       nombre: "Leia",
//       animal: "Perro",
//       raza: "Chucho",
//     }),
//     React.createElement(Pet, {
//       nombre: "Laika",
//       animal: "Perro",
//       raza: "Pastor Alemán",
//     }),
//     React.createElement(Pet, {
//       nombre: "Luna",
//       animal: "Gato",
//       raza: "Siames",
//     }),
//   ]);
//};
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Switch>
          <Route path="/details/:id"> {/*// Con : pasamos parámetros a las rutas */}
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route></Switch>
      </Router>
    </div>
  )
}

// Para usar el componente
ReactDOM.render(<App />, document.getElementById("root")); // Podríamos poner createElement(App, {}, null), sim embargo es opcinal, ya que tiene varios constructores
