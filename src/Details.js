import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
class Details extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         loading: true
    //     }
    // }
    // Cuando instalamos las dependecias para trabajar con class components, podemos prescindir del constructor y trabaar con atributos de clase de forma más comoda
    state =
        { loading: true }
    async componentDidMount() { // componentDidMount es el método que se llama tan pronto se renderiza el componente por PRIMERA VEZ
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await response.json()
        this.setState(
            Object.assign(
                { loading: false },
                json.pets[0]
            )
        )
        // El Object.assign, funciona de la siguiente manera
        // this.setState({
        //     loading: false,
        //     name = json.pets[0].name,
        //     breed = json.pets{0}.breed,
        //     animal = json.pets[0].animal,
        //     ...etc;
        // })
    }

    render() {
        const { animal, breed, city, state, description, name, images } = this.state
        if (this.state.loading) { // El stado de nuestro componente nos permite conocer cuando se ha renderizado el cotenido, gracias al método componenteDidMount()
            return (
                <h2>Cargando...</h2>
            )
        }
        return (
            <div className="details">
                <div>
                    < h1 > {name}</h1 >
                    <Carousel images={images} />

                    {/* <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2> */}
                    <h2>{animal} - {breed} - {city}, {state}</h2>

                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }

}

// const Details = () => {
//     return (
//         <h2>Holaa soy la pagina de detalles</h2>
//     )
// };

export default withRouter(Details);