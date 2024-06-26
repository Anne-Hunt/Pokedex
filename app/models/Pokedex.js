// function typeMagic(types) {
//   let typeString = ''
//   let typeArray = types
//   for (let i = 0; i > typeArray.length; i++) {
//     let name = typeArray.i.type.name
//     name.forEach(name => typeString += name)
//   }
//   return typeString
// }


export class Pokemon {

  /**@params {name: string, nickname: string, img: string, weight: string, height: string, types: [[[]]]} */
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
        <li><a class="dropdown-item text-dark" onclick="app.SandboxController.setActivePoke('${this.name}')">${this.name}</a></li>
        `
  }

  get ActivePokeTemplate() {
    return `
        <div class="container-fluid">
  <div class="row">
    <div>
      <div class="card-title border border-dark rounded bgmutedred border-4 p-2 px-4">
        <div class="bg-white text-dark text-center borderpink">
          <h2 class="mt-1">${this.name}</h2>
        </div>
      </div>
      <div class="card-image d-flex justify-content-center">
        <img src="${this.img}" alt="${this.nickname}" class="pokeimg">
      </div>
      <div class="card-body border border-dark border-5 bgmutedred rounded p-2">
        <div class="card-subtitle">
          <div class="d-flex justify-content-between text-dark">
            <span class="card-text text-start">Height: ${this.height}</span>
            <span class="card-text text-end">Weight: ${this.weight}</span>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <p class="card-text text-dark">Type: ${this.typeMagic}</p>
            <button onclick="app.SandboxController.saveOwnedPokemon()"
              class="btn btn-light border border-5 border-dark rounded text-dark py-0">Catchem</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        `
  }

  get typeMagic() {
    let typeString = ''
    this.types.forEach(type => typeString += type.type.name)
    return typeString
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