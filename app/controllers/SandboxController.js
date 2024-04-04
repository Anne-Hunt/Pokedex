import { AppState } from "../AppState.js"
import { sandboxService } from "../services/SandboxService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class SandboxController {
    constructor() {
        AppState.on('account', this.getSandPokeData)
        AppState.on('sandPokemons', this.drawOwnedPoke)
    }

    async getSandPokeData() {
        console.log('sandbox controller is controlling')
        try {
            let results = await sandboxService.getSandPokeData()
            console.log('got heard from service', results)
        } catch (error) {
            console.log(error)
            Pop.toast("Sandbox devoid of results", 'error')
        }
    }
    async saveOwnedPokemon() {
        try {
            await sandboxService.saveOwnedPokemon()
        } catch (error) {
            Pop.toast("Can't own your friends", 'error')
            console.error(error)
        }
    }

    async setActivePoke(pokeName) {
        console.log('sandbox knows about request, sending')
        try {
            await sandboxService.setActivePoke(pokeName)
        } catch (error) {
            console.log('errd, Pokefriend said no', error)
        }
    }

    drawOwnedPoke() {
        console.log('drawing owned friends 🚔')
        const pokemons = AppState.sandPokemons
        let ownedPokeList = ''
        pokemons.forEach(pokemon => ownedPokeList += pokemon.OwnedPokedexListTemplate)
        setHTML('owned-pokes', ownedPokeList)
    }

    // drawActiveOwnedPoke(pokeName) {
    //     console.log('drawing owned, singled out friend', pokeName)
    //     setHTML('active-pokemon',)
    // }

    trashPoke(pokeId) {
        console.log('request to trash a friend', pokeId)
        let confirmation = Pop.confirm("Do you want to toss a friend in the trash?", "warning")
        confirmation ? sandboxService.trashPoke(pokeId) : Pop.toast("Thanks for not trashing me!", "success")
    }

}