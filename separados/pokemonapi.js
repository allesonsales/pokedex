const tabela = document.getElementsByClassName ('content')



const pokemonApi = {}

function convertToHtml(pokedetails) {
    return `
    <section class="content">

        <div class="title">

            <div class="nameandtype">
                <h1 class="name">Bulbassaur</h1>
                <span class="type">Grass</span><span class="type">Poison</span>
            </div>

            <span class="id">#001</span>
        </div>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbassaur">
        
        <div class="description">

            <div class="menu">
                <p class="menuitem">About</p>
            </div>

            <div class="stats">

                <div class="statsitem">
                    <small class="descriptionTitle">Specie:</small> <span class="descriptiondirect">${pokedetails.specie}</span>
                </div>

                <div class="statsitem">
                    <small class="descriptionTitle">Height:</small> <span class="descriptiondirect">${pokedetails.height}</span>
                </div>

                <div class="statsitem">
                    <small class="descriptionTitle">Weight:</small> <span class="descriptiondirect">${pokedetails.weight}</span>
                </div>

                <div class="statsitem">
                    <small class="descriptionTitle">Abilites:</small> <span class="descriptiondirect">${pokedetails.abilities}</span>
                </div>

                <div class="statsitem">
                    <small class="descriptionTitle">Gender:</small> <span class="descriptiondirect">${pokedetails.gender}</span>
                </div>
            </div>
        </div>
    </section>`
}



const fetchpokemon = () => {
    let idPokemon = 3;
    const url = `https://pokeapi.co/api/v2/pokemon/`+idPokemon;

    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            // console.log (pokemon) // Obj Completo
            console.log (pokemon.name)
        })
}


    fetchpokemon();

function novoHtml (tabela) {
    // tabela.innerHTML += 'Teste';
}

function convertToDetail (pokedetails) {
    const poke = new Detail ()
    // poke.specie = pokedetails.specie
    // poke.height = pokedetails.height
    // poke.weight = pokedetail.weight
    // poke.abilities = pokedetails.abilities
    // poke.gender = pokedetail.gender  
    // poke.photo = pokedetails.photo

    poke = pokedetails;

    return '<p></p>'
}
