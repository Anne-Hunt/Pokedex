import { AppState } from "../AppState.js"
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
        } catch (error) {
            console.log(error)
            Pop.toast("Oh no, Pokedudes are unable to be found", 'error')
        }
    }

    async setActivePoke(pokeId) {
        console.log('sending request to service', pokeId)

    }

    drawActivePoke(pokeId) {
        console.log('drawing pokemon', pokeId)

    }

    drawPokeList() {
        console.log('making em all appear')
    }


}