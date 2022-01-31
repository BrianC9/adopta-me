
// Props, propiedaes de un componente. Se pasan como un objeto
// El flujo de información en React es Vertical de padre a hijo, nunca podremos modificar el componente padre, por ello le pasamos unas propiedades que únicamente alteran a la instancia de nuestro componente
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.nombre),
        React.createElement("h4", {}, props.animal),
        React.createElement("h4", {}, props.raza),
    ])
}

// Componente - Se trata de un molde que permite crear nuevos componentes
// Devuelve lo que se resuelve de Reac.createElement()
// En este punto hemos creado el componente, pero no lo hemos usado todavía
const App = () => {
    return React.createElement(
        "div",
        {}, [
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet, { nombre: "Leia", animal: "Perro", raza: "Chucho" }),
        React.createElement(Pet, { nombre: "Laika", animal: "Perro", raza: "Pastor Alemán" }),
        React.createElement(Pet, { nombre: "Luna", animal: "Gato", raza: "Siames" }),
    ]
    );
};


// Para usar el componente
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
); // Podríamos poner createElement(App, {}, null), sim embargo es opcinal, ya que tiene varios constructores
