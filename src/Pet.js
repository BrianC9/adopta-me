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
        <a href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />

            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </a>)
}
export default Pet;