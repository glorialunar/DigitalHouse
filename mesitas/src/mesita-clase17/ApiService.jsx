import axios from "axios"

const url = "https://pokeapi.co/api/v2/";

export const getPokemones = () => {
    return (
        axios.get(url + 'pokemon?limit=50&offset=0')
    )
}

export const getPokemon = (poke) => {
    return(
        axios.get(url + 'pokemon/' + poke)
    )
}

export const types = () => {
    return(
        axios.get(url + 'type')
    )
}

export const typeId = (id) => {
    return(
        axios.get(url + 'type/' + id)
    )
}