import { useState } from "react";
import React from "react";

const SearchParams = () => {
    const [location, setLocation] = useState("");

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
                    location
                    <input id="location"
                        // onChange={actualizaLocaiton} //Esta función es equivalente a la arrow function que le pasamos
                        onChange={event => setLocation(event.target.value)}
                        value={location}
                        placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;