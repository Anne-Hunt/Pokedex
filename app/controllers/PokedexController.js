import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokedex.js"
import { pokedexService } from "../services/PokedexService.js"
import { Pop } from "../utils/Pop.js"


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
            console.log(error)
            Pop.toast("Oh no, Pokedudes are unable to be found", 'error')
        }
    }

    async setActivePoke(pokeName) {
        console.log('sending request to service', pokeName)
        let response = await pokedexService.setActivePoke(pokeName)
        console.log('service sent', response)

    }

    drawActivePoke(pokeName) {
        console.log('drawing pokemon', pokeName)

    }

    drawPokeList() {
        console.log('making em all appear')
        let pokeList = ''
        AppState.pokemons.forEach(pokemon => pokeList += Pokemon.PokedexListTemplate)
    }


}