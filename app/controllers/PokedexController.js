import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokedex.js"
import { pokedexService } from "../services/PokedexService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class PokedexController {
    constructor() {
        this.getPokeData()
        AppState.on('pokemons', this.drawPokeList)
        AppState.on('activePokemon', this.drawActivePoke)
    }

    async getPokeData() {
        try {
            console.log('pokedata starting')
            const response = await pokedexService.getPokeData()
            console.log('getting data', response)
        } catch (error) {
            console.error(error)
            Pop.toast("Oh no, Pokedudes are unable to be found", 'error')
        }
    }

    async setActivePoke(pokeName) {
        try {
            console.log('sending request to service', pokeName)
            let response = await pokedexService.setActivePoke(pokeName)
            console.log('service sent', response)
        } catch (error) {
            console.error(error)
            Pop.toast('Whoa no, we have an error', 'error')
        }

    }

    drawActivePoke() {
        console.log('drawing pokemon', AppState.activePokemon)
        const activePokemon = AppState.activePokemon
        setHTML('active-poke', activePokemon.ActivePokeTemplate)
    }

    drawPokeList() {
        console.log('making em all appear')
        const pokemons = AppState.pokemons
        let pokeList = ''
        pokemons.forEach(pokemon => pokeList += Pokemon.PokedexListTemplate(pokemon.name))
        setHTML('poke-list', pokeList)
    }


}