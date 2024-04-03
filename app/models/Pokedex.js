
export class Pokemon {

    constructor(data) {
        this.name = data.name
        this.nickname = data.nickname
        this.imgUrl = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }


    get OwnedPokedexListTemplate() {
        return `
        `
    }

    get ActivePokeTemplate() {
        return `
        <div class="container-fluid">
        <div class="row">
        <div class="card d-flex justify-content-center">
        <div class="card-title border border-warning border-4">
        ${this.name}
        </div>
        <div class="card-image">
        <img src="${this.imgUrl}" alt="${this.nickname}">
        </div>
        <div class="card-body">
        <div class="card-subtitle">
        <h3>${this.nickname}</h3>
        </div>
        <p class="card-text">Height: ${this.height}</p>
        <p class="card-text">Weight: ${this.weight}</p>
        <p class="card-text">Type: ${this.types}</p>
        </div>
        </div>
        
        </div>
        </div>
        
        </div>
        `
    }

    static get PokedexListTemplate(pokemon.name,) {
        return `
        <div>
    <a role="button" onclick="app.PokedexController.setActivePoke(${this.name})">
    <h4>${this.name}</h4>
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