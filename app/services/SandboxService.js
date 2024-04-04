// eslint-disable-next-line no-undef

import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokedex.js"
import { api } from "./AxiosService.js"
// @ts-ignore
// const SandPokeAPI = axios.create({ 
//     baseURL: 'https://sandbox.codeworksacademy.com/api/pokemon',
//     timeout: 8000
// })


class SandboxService {

    async getSandPokeData() {
        console.log('service sees request for poke')
        let response = await api.get('api/pokemon')
        console.log('response dun run', response.data)
        const mySandPokemons = response.data.map(pokemon => new Pokemon(pokemon))
        AppState.sandPokemons = mySandPokemons
    }

    async setActivePoke(pokeName) {
        console.log('setting to active')
        const activePoke = AppState.sandPokemons.find(pokemon => pokemon.name == pokeName)
        AppState.activePokemon = activePoke
        console.log(AppState.activePokemon)
    }

    async saveOwnedPokemon() {
        console.log('saving');
        const response = await api.post('api/pokemon', AppState.activePokemon)
        console.log('you own friends bruh', response.data);
        const pokemon = new Pokemon(response.data) // convert one object into a classed model
        AppState.sandPokemons.push(pokemon)
    }

    trashPoke(pokeName) {
        let pokemonToTrash = ''

    }

}

export const sandboxService = new SandboxService()