
export class Pokemon {

    constructor(data) {
        this.name = data.name
        this.nickname = data.nickname
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }


    get OwnedPokedexListTemplate() {
        return `
        <li><a class="dropdown-item text-dark" onclick="app.SandboxController.setActivePoke(${this.name})">${this.name}</a></li>
        `
    }

    get ActivePokeTemplate() {
        return `
        <div class="container-fluid">
  <div class="row">
    <div class="card bg-transparent border-none d-flex justify-content-center">
      <div class="card-title border border-dark rounded bgmutedred border-4 p-2 px-4">
        <div class="bg-white text-dark text-center">
          <h2>${this.name}</h2>
        </div>
      </div>
      <div class="card-image d-flex justify-content-center">
        <img src="${this.img}" alt="${this.nickname}" class="pokeimg">
      </div>
      <div class="card-body border border-dark border-5 bgmutedred rounded">
        <div class="card-subtitle">
          <div class="d-flex justify-content-between text-dark">
            <span class="card-text text-start">Height: ${this.height}</span>
            <span class="card-text text-end">Weight: ${this.weight}</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <p class="card-text text-start">Type: ${this.types}</p>
            <button onclick="app.SandboxController.saveOwnedPokemon()"
              class="btn btn-light border border-5 border-dark rounded text-dark text-end">Catchem</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        `
    }

    static PokedexListTemplate(pokemonName) {
        return `
        <div>
    <a role="button" onclick="app.PokedexController.setActivePoke('${pokemonName}')">
    <h4>${pokemonName}</h4>
    </a>
    </div>
        `
    }
}

// name: String, required
// nickName: String, 
// img: String, required
// weight: String, 
// height: String, 
// types: undefined, 
// creatorId: String (References Account Id), required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)