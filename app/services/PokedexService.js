import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { Pokemon } from "../models/Pokedex.js"

// eslint-disable-next-line no-undef
// @ts-ignore
const PokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 8000
})

class PokedexService {

    async getPokeData() {
        try {
            const response = await PokemonAPI.get('?limit=100')
            console.log('caughtmons', response)
            AppState.pokemons = response.data.results
            console.log('AppStatedcaughtmons', AppState.pokemons)
        } catch (error) {
            console.log(error)
            Pop.toast("Where have all the pokedudes gone?", "error")
        }
    }

    async setActivePoke(pokeName) {
        let response = await PokemonAPI.get(`/${pokeName}`)
        console.log('setting to active', response.data)
        const activePoke = new Pokemon(response.data)
        AppState.activePokemon = activePoke
        console.log(AppState.activePokemon)
    }

}


export const pokedexService = new PokedexService()