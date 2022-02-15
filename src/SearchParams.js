import { useState } from "react";
import React from "react";
const ANIMALS = ["pajaro", "gato", "perro", "conejo", "reptil"]

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [raza, setRaza] = useState("");
    const razas = []

    // const locationTupla = useState("");
    // const location = locationTupla[0]
    // const setLocation = locationTupla[1]
    // function actualizaLocaiton(event) {
    //     setLocation(event.target.value)
    //     console.log(event.target.value)
    // }
    if (4 + 1 === 1) {
        const [animal, setAnimal] = useState("");
    }
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Localización
                    <input id="location"
                        // onChange={actualizaLocaiton} //Esta función es equivalente a la arrow function que le pasamos
                        onChange={event => setLocation(event.target.value)}
                        value={location}
                        placeholder="Localización" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        {
                            ANIMALS.map(animal => (
                                <option
                                    value={animal}
                                    key={animal}>
                                    {animal}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;