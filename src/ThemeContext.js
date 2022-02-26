import { React, createContext } from "react";
// Otros usos para el contexto global en una app
// CSS
// Un usuario se ha loggeado y queremos que toda la aplicación se base en ese contexto,
// Por ejemplo, mi perfil, comentarios, página de ajustes del perfil, etc
const ThemeContext = createContext(["green", function () { }]);
export default ThemeContext;