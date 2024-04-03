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
        let response = await api.get('api')
        console.log('response dun run', response)
        const mySandPokemons = response.data.map(pokemon => new Pokemon(pokemon))
        AppState.sandPokemons = mySandPokemons
    }

    setActivePoke() {
        throw new Error("Method not implemented.");
    }

    trashPoke(pokeId) {
        throw new Error("Method not implemented.");
    }

}

export const sandboxService = new SandboxService()