import { sandboxService } from "../services/SandboxService.js"
import { Pop } from "../utils/Pop.js"


export class SandboxController {
    constructor() {
        this.getSandPokeData()
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

    async setActivePoke() {
        console.log('sandbox knows about request, sending')
        try {
            let results = await sandboxService.setActivePoke()
        } catch (error) {
            console.log('errd, Pokefriend said no', error)
        }
    }

    drawOwnedPoke() {
        console.log('drawing owned friends 🚔')
    }

    drawActiveOwnedPoke(pokeId) {
        console.log('drawing owned, singled out friend', pokeId)

    }

    trashPoke(pokeId) {
        console.log('request to trash a friend', pokeId)
        let confirmation = Pop.confirm("Do you want to toss a friend in the trash?", "warning")
        confirmation ? sandboxService.trashPoke(pokeId) : Pop.toast("Thanks for not trashing me!", "success")
    }

}