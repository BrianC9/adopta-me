import React from "react";
import Pet from "./Pet";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Results = ({ pets }) => {
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <div className="search" style={{ backgroundColor: theme }}>
            {!pets.length ? (
                <h2>No pets found</h2>
            ) : (
                pets.map((pet) => {
                    return (<Pet
                        animal={pet.animal}
                        name={pet.name}
                        key={pet.id}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />)
                    /*
                    Con el spread operator conseguimos lo mismo, ya que deconstruyendo el objeto, accedemos a cada variable 
                    Sin embargo, la legibilidad es muy mala a la hora de mantener código.
                    Otro aspecto a tener en cuenta es que las key del objeto deberían llamarse igual que en la API, por lo tanto si es una API externa, debemos asegurarnos
                    <Pet 
                    {...pet}
                    key={pet.id}
                    />
                    */
                })
            )}
        </div>

    )

}

export default Results;