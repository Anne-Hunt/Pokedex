import { Pokemon } from './models/Pokedex.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {{Pokemon}[]} */
  pokemons = []

  activePokemon = null

  /**@type {Pokemon[]} */
  sandPokemons = [] || null
}

export const AppState = createObservableProxy(new ObservableAppState())