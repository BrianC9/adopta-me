import { React, Component } from "react";

class Carousel extends Component {
    state = { // Con esto ponemos por defecto la primera foto, es decir, del array de imágenes que recibimos como Prop, queremos que se muestre la primera
        active: 0
    };

    static defaultProps = { // Lo hacemos estático para que todos los componentes tengan esta foto en caso de que no se pase una prop al componente
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }
    handleIndexClick = (event) => {
        //Las arrow function funcionan de la siguiente manera al interactuar con el this:
        // Cuando creamos una arrow function, no crea un contexto nuevo para el this para el contexto en el que está
        // Por lo tanto, cuando llame a handleIndexClick, no cogerá el this desde donde se usa, sino que lo hará desde donde se ha creado, es decir, desde el objeto
        // En conclusión, si necesitamos obtener el this y que tenga el contexto de nuestro class Component, las arrow function, mantendrán el contexto
        this.setState({
            active: +event.target.dataset.index //Coercion de tipos javascript
        })
        console.log(this)
    }
    // Si dejasemos esto como una función, estamos perdiendo el contexto del this, es decir, nos enviaría un error
    // ya que el this no está haciendo referencia al objeto
    render() {

        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                            data-index={index}
                            onClick={this.handleIndexClick}

                        // onClick={this.handleIndexClick.bind(this)}
                        // Haciendo un bind de esta función con el this, estamos uniendo nuestra clase con el objeto que la utiliza

                        />
                    ))}
                </div>
            </div>

        )
    }

}
export default Carousel;