import React from "react";
import { Link } from "react-router-dom";

// Props, propiedaes de un componente. Se pasan como un objeto
// El flujo de información en React es Vertical de padre a hijo, nunca podremos modificar el componente padre, por ello le pasamos unas propiedades que únicamente alteran a la instancia de nuestro componente
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.nombre),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.raza),
//     ]);
// };
const Pet = ({
    name,
    animal,
    breed,
    images,
    location,
    id
}) => {

    let hero = 'http://pets-images.dev-apis.com/pets/none.jpg'
    if (images.length) {
        hero = images[0]
    }

    return (
        <Link to={`/details/${id}`} className="pet">
            {/*// Con esto conseguimos que el navegado no se recargue de nuevo, es decir, que no vaya directamente a otra página sino que navegue entre las diferentes partes de la aplicacion
        // Consiguiendo así construir una SPA (Single Page Application) */}
            <div className="image-container">
                <img src={hero} alt={name} />

            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </Link>)
}
export default Pet;