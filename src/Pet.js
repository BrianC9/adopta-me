import React from "react";


// Props, propiedaes de un componente. Se pasan como un objeto
// El flujo de información en React es Vertical de padre a hijo, nunca podremos modificar el componente padre, por ello le pasamos unas propiedades que únicamente alteran a la instancia de nuestro componente
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.nombre),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.raza),
//     ]);
// };
const Pet = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.animal}</h3>
            <h3>{props.breed}</h3>
        </div>)
}
export default Pet;