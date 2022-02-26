import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import React from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]); // Vamos a traeros una lista de mascotas
    //const breeds = []
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext)

    useEffect(() => {
        requestPets();
    }, []); // useEffect (()=>{},[])Esto le está diciendo al useEffect, cuando debería volver a ejecutarse, si no lo ponemos estmaos diciendole que lo ejecute cada vez que se hace un render, algo como un bucle infinito
    // [animal] -> Le estamos diciendo que lo ejecute sólo cuando el estado de animal cambie
    // Ejemplo de un useEffect que implementa un garbage collector -> Más seguridad en caso de que [animal] se elimine del DOM 
    // useEffect(() => {
    //     const temporizador = setTimeout(() => console.log("hi"), 3000);
    //     return () => clearTimeout(temporizador);
    // }, [animal])

    async function requestPets() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await response.json();

        setPets(json.pets)
    }
    // const locationTupla = useState("");
    // const location = locationTupla[0]
    // const setLocation = locationTupla[1]
    // function actualizaLocaiton(event) {
    //     setLocation(event.target.value)
    //     console.log(event.target.value)
    // }



    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Localización
                    <input id="location"
                        // onChange={actualizaLocaiton} //Esta función es equivalente a la arrow function que le pasamos
                        onChange={(event) => setLocation(event.target.value)}
                        value={location}
                        placeholder="Localización" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Raza
                    <select id="breed"
                        disabled={!breeds.length}
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                        {
                            breeds.map(breed => ( // No modifica el array, sino que devuelve uno nuevo
                                <option
                                    value={breed}
                                    key={breed}>
                                    {breed}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}>
                        <option value="darkblue">Dark Blue</option>
                        <option value="peru">Peru</option>
                        <option value="mediumorchid">Medium Orchid</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams;