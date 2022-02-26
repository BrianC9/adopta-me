import React, { useState } from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
class Details extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         loading: true
    //     }
    // }
    // Cuando instalamos las dependecias para trabajar con class components, podemos prescindir del constructor y trabaar con atributos de clase de forma más comoda
    state =
        { loading: true, showModal: false }
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
    toggleModal = () => this.setState({ showModal: !this.state.showModal }) // Si es true que sea false y viceversa
    adopt = () => { window.location = "http://bit.ly/pet-adopt" }
    //Agregamos un nuevo botón para el modal
    // Aquí es donde tendríamos la lógica de la API -> Avisamos a la protectora de que alguien ha adoptado

    render() {
        const { animal, breed, city, state, description, name, images, showModal } = this.state
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
                    <ThemeContext.Consumer>
                        {([theme]) => (<button onClick={this.toggleModal} style={{ background: theme }}>Adopt {name}</button>)}

                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h2>Would you like to adopt {name}</h2>
                                    <div className="buttons">
                                        <ThemeContext.Consumer>
                                            {([theme]) => (
                                                <div>
                                                    <button style={{ background: theme }} onClick={this.adopt}>Yes</button>
                                                    <button style={{ background: theme }} onClick={this.toggleModal}>No</button>
                                                </div>
                                            )}

                                        </ThemeContext.Consumer>
                                    </div>
                                </div>
                            </Modal>
                        ) : null // Esto lo que hará es no renderizar nada
                    }
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
const DetailsWithRouter = withRouter(Details);
export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
}; 
