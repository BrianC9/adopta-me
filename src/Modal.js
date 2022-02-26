import { useEffect, useRef, React } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal")
/*
Explicación del renderizado del Modal en el DOM:
Tenemos dos divs en el DOM, en nuestro div·root, vive nuestra aplicación principal,
sin embargo, nuestro modal se va a renderizar en el div·modal y estará fuera del root, 
simplemente estamos usandolo en nuestra aplicación mediante funciones.

*/

// Aparte de los modales, otro uso que le podemos dar a los portales, pueden ser las barras de navegación basadas en el contexto de un componente principal
// Por ejemplo, estas leyendo un artículo de JS y queremos mostrar artóculos relacionados 
const Modal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        elRef.current = document.createElement("div")
    }

    useEffect(() => {
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current)
        // Esto lo hacemos para eliminar el div que se renderiza y no tener memory leaks, es decir:
        // Cuando abrimos un modal, se hace un append al DOM, si no lo limpiamos, estaremos creando tantos divs como veces abramos ese modal
    }, [])
    console.log(elRef.current)
    // elRef.current -> Hace referencia al div en el cual se va a renderizar el contenido
    return createPortal(<div>{children}</div>, elRef.current)
    //Lo que hace este método es, todos los hijos de este div, quiero que se renderizen en el div con id modal al que estoy haciendo referencia
    // Por qué no hacer un ReactDOM? 
    // Porque lo que estamos haciendo es renderizar fuera del DOM, y podría haber una sobrecarga

}

export default Modal;