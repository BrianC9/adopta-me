import { Component, React } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDeriveStateFromError() {
        return { hasError: true, redirect: false }
    }

    componentDidCatch(error, info) { // El componente tiene este ciclo para capturar errores
        // Log to service errors PAA Sentrym Azure Monitor, New Relic, etc
        console.error("ErrroBoundary ha capturado un error", error, info)
        setTimeout(() => this.setState({ redirect: true }), 3000)
    }





    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        } else if (this.state.hasError) {
            return (
                <h2>
                    Ha ocurrido un error. <Link to="/">Click aquí</Link> para regresar a la pagina de incio o espera tres segundos
                </h2>
            )
        }
        return this.props.children;

        /* 
        this.props.children -> Hace referencia al contenido que se encuentra dentro de las etiquetas del componente 
        <ErrorBoundary>
        <h1>This is my page</h1>
        </ErrorBoundary>
        
        */
    }
}

export default ErrorBoundary;