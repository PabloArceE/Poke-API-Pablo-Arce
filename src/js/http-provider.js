
export const init = () => {
    fetchPokemon( pokemonId());
    eventos();
}

const pokemonId = () => {
    const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

    const randomId = getRandomInt(1, 151)

    return randomId
}

const fetchPokemon = async(id) => {

    try {
        
        const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        console.log(data);

        const obtenerTipo = (data) => {
            
            const tipos = []
            
            for(let tipo of data.types){
                tipos.push(tipo.type.name);
            }
                        
            return tipos;                
        }

        const obtenerHabilidades = (data) => {
            
            const habilidades = []
            
            for(let habilidad of data.abilities){
                habilidades.push(habilidad.ability.name);
            }
                        
            return habilidades;               
        }

        const obtenerMovimientos = (data) => {
            
            const movimientos = []
            
            for(let movimiento of data.moves){
                movimientos.push(movimiento.move.name);
            }
                        
            return movimientos;               
        }  
        
        const descId = () =>{
            const getRandomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min)) + min;
              }
            
              return getRandomInt(1, 31);            
        }

        console.log(descId())

        const num = descId();

        const res1  = await fetch(`https://pokeapi.co/api/v2/characteristic/${num}/`);
        const data1 = await res1.json();

        console.log(`data1: ${data1.descriptions[5].description}`);

        

        let pokemon = {
            id         : data.id,
            foto       : data.sprites.other.dream_world.front_default,
            nombre     : data.name,
            tipo       : obtenerTipo(data),
            peso       : data.weight,
            habilidades: obtenerHabilidades(data),
            descripcion: data1.descriptions[5].description,
            movimientos: obtenerMovimientos(data)
        }
        

        verPokemon(pokemon);

    } catch (err) {
        console.log(err);
    }
}

const main = document.querySelector('.main');
let imgPokemon, btnPokemon;

const verPokemon = (pokemon) => {

    console.log(pokemon);

    const html = `
    
        <div class="container">
            <img id= "img-${pokemon.id}" class="foto-pokemon btn d-grid gap-2 col-4 mx-auto" src="${pokemon.foto}" alt="Foto Pokemon">               
            
            <div class="alert alert-primary">
                <ul>
                    <li class="pokemon-nombre">Nombre: ${pokemon.nombre}</li>
                    <li class="pokemon-tipo">Tipo: ${pokemon.tipo}</li>
                    <li class="pokemon-peso">Peso: ${pokemon.peso}</li>
                    <li class="pokemon-habilidades">Habilidades: ${pokemon.habilidades}</li>
                </ul>
            </div>    
        </div>
        
        <div id="${pokemon.id}"></div>
    `;

    const htmlInfo = `
    <div class="alert alert-primary">
        <ul>
            <li class="pokemon-descripcion">Descripción: ${pokemon.descripcion}</li>
            <li class="pokemon-movimientos">Movimientos: ${pokemon.movimientos}</li>
        </ul>
    </div> 
    `

    const divPokemon = document.createElement('div');
    divPokemon.innerHTML = html;

    main.append(divPokemon);

    
    
    imgPokemon = document.getElementById(`img-${pokemon.id}`);
    
    imgPokemon.addEventListener('click', () => {
        const divInfo = document.getElementById(`${pokemon.id}`);
        divInfo.innerHTML = htmlInfo;
       
    })
}

const eventos = () => {

    btnPokemon = document.querySelector('.btn-outline-primary')
    
    btnPokemon.addEventListener('click', () =>{
        fetchPokemon( pokemonId());
    })
}


