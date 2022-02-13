import React from "react";
import ReactDOM from "react-dom";
//Para ignorar el linter y decirle que React es un elemento global

import Pet from './Pet'

// Componente - Se trata de un molde que permite crear nuevos componentes
// Devuelve lo que se resuelve de Reac.createElement()
// En este punto hemos creado el componente, pero no lo hemos usado todavía
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      nombre: "Leia",
      animal: "Perro",
      raza: "Chucho",
    }),
    React.createElement(Pet, {
      nombre: "Laika",
      animal: "Perro",
      raza: "Pastor Alemán",
    }),
    React.createElement(Pet, {
      nombre: "Luna",
      animal: "Gato",
      raza: "Siames",
    }),
  ]);
};

// Para usar el componente
ReactDOM.render(React.createElement(App), document.getElementById("root")); // Podríamos poner createElement(App, {}, null), sim embargo es opcinal, ya que tiene varios constructores
