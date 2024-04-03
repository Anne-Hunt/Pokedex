import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

// eslint-disable-next-line no-undef
// @ts-ignore
const PokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100',
    timeout: 8000
})

class PokedexService {

    async getPokeData() {
        try {
            const response = await PokemonAPI.get('PokemonAPI')
            console.log('caughtmons', response)
            AppState.pokemons = response.data.results
            console.log('AppStatedcaughtmons', AppState.pokemons)
        } catch (error) {
            console.log(error)
            Pop.toast("Where have all the pokedudes gone?", "error")
        }
    }

    async setActivePoke(pokeName) {
        let response = await PokemonAPI.get('PokemonAPI', `/pokemon/${pokeName}`)
        console.log('setting to active', response)
        const activePoke = response.data
        AppState.activePokemon = activePoke
        console.log(AppState.activePokemon)
    }

}


export const pokedexService = new PokedexService()