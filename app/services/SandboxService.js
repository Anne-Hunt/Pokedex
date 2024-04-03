// eslint-disable-next-line no-undef

import { AppState } from "../AppState.js"

// @ts-ignore
const SandPokeAPI = axios.create({ // this will always give you an error, because axios only exists once the page loads
    baseURL: 'https://sandbox.codeworksacademy.com/api/pokemon',
    timeout: 8000
})


class SandboxService {

    async getSandPokeData() {
        console.log('service sees request for poke')
        let response = await SandPokeAPI.get('SandPokeAPI')
        console.log('response dun run', response)
        AppState.sandPokemons = response.data.results
    }

    setActivePoke() {
        throw new Error("Method not implemented.");
    }

    trashPoke(pokeId) {
        throw new Error("Method not implemented.");
    }

}

export const sandboxService = new SandboxService()