const tabela = document.querySelector('.container')

const pokemonApi = {}

function convertToHtml(pokedetails) {
    const newHtml = `
    <section class="content">

        <div class="title">

            <div class="nameandtype">
                <h1 class="name">${pokedetails.name}</h1>
                ${pokedetails.specie.map(type => `<span class="type">${type}</span>`).join('')}
            </div>

            
            <span class="id">#${pokedetails.id}</span>
        </div>

        <img src="${pokedetails.photo}" alt="${pokedetails.name}">
        
        <div class="description">

            <div class="menu">
                <p class="menuitem">About</p>
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
                        ${pokedetails.abilities.map(ability => `<p class="descriptiondirect">${ability}</p>`).join(',')}
                    </div>
    
                </div>
            </div>

        </div>
    </section>`
    tabela.innerHTML += newHtml;
}

const fetchpokemon = () => {
    let idPokemon = 120;
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            console.log (pokemon)
            convertToDetail(pokemon)
        })
        .catch(error => console.error('Error fetching Pokémon:', error));
}


function convertToDetail (pokedetails) {
    const poke = new detail()
    console.log(pokedetails)
    poke.specie = pokedetails.types.length > 1 
    ? pokedetails.types.map(typeInfo => typeInfo.type.name) 
    : [pokedetails.types[0].type.name];
    poke.height = pokedetails.height
    poke.weight = pokedetails.weight
    poke.abilities = pokedetails.abilities.length > 1
    ? pokedetails.abilities.map(abilityInfo => abilityInfo.ability.name)
    : [pokedetails.abilities[0].ability.name];
    poke.photo = pokedetails.sprites.other["dream_world"].front_default;
    poke.name = pokedetails.name
    poke.id = pokedetails.id

    convertToHtml(poke)
}


fetchpokemon();