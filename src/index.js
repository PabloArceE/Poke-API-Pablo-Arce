import './style.css';



document.addEventListener('DOMContentLoaded', () => {
    fetchPokemon(1)
        
})



const fetchPokemon = async(id) => {

    try {
        
        const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        console.log(data)

        const obtenerTipo = (data) => {
            
            const tipos = []
            
            for(let tipo of data.types){
                tipos.push(tipo.type.name)
            }
                        
            return tipos                
        }

        const obtenerHabilidades = (data) => {
            
            const habilidades = []
            
            for(let habilidad of data.abilities){
                habilidades.push(habilidad.ability.name)
            }
                        
            return habilidades               
        }        

        let pokemon = {
            foto       : data.sprites.other.dream_world.front_default,
            nombre     : data.name,
            tipo       : obtenerTipo(data),
            peso       : data.weight,
            habilidades: obtenerHabilidades(data)
        }
        
        verPokemon(pokemon)

    } catch (err) {
        console.log(err)
    }
}

const verPokemon = (pokemon) => {

    console.log(pokemon)

    const main     = document.querySelector('.main')
    const template = document.querySelector('#template').content
    const clone    = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.foto-pokemon').setAttribute('src', pokemon.foto)
    clone.querySelector('.pokemon-nombre').innerHTML      = `Nombre: ${pokemon.nombre}`
    clone.querySelector('.pokemon-tipo').innerHTML        = `Tipo: ${pokemon.tipo}`
    clone.querySelector('.pokemon-peso').innerHTML        = `Peso: ${pokemon.peso}`
    clone.querySelector('.pokemon-habilidades').innerHTML = `Habilidades: ${pokemon.habilidades}`
    

    fragment.appendChild(clone)
    main.appendChild(fragment)

}

