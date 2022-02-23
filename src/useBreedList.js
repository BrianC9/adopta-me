import react from "react";
import { useState, useEffect } from "react";


//Lo que vamos a hacer es almacenar las razas de los diferentes animales en la memoria local,
// Ej: Seleccionamos perro y nos devuelve Husky, Frieza; seleccionamos Cat y nos devuelve Siamés, etc
// Queremos que las razas de los perros se queden almacenadas en la memoria local para no tener que hacer otra petición

const localCache = {};

export default function useBreedList(animal) {

    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded');

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) { // Si tengo algo en la memoria local, es decir, si ya lo había solicitado anteriormente, quiero que coja de ahi los datos
            setBreedList(localCache[animal])
        } else { // si no se da ninguna, solicítalo a la API
            requesBreedList();
        }
        async function requesBreedList() {
            // Antes de solicitar la raza a la API vamos a limpiar lo que tengamos almacenado ahi, 
            // De esta manera no habrá problemas si buscamos gatos o perros y ya habían razas ahí almacenadas
            // Por ejemplo, en nuestra memoria local tenemos ya almacenado, razas de perro y seleccioamos un gato, puede darse que nos diga un gato husky
            setBreedList([]);
            setStatus('loading');
            const response = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await response.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus('loaded');
        }
    }, [animal]) // Esto actualizará el listado de razas cada vez que cambie animal
    return [breedList, status];

}