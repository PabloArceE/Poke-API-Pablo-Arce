document.addEventListener('DOMContentLoaded', () => {
    fetchPokemon(1)
})

const fetchPokemon = async(id) => {

    try {
        
        const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        console.log(data)

        let pokemon = {
            foto       : data.sprites.other.dream_world.front_default,
            nombre     : data.name,
            tipo       : data.types[0].type.name,
            peso       : data.weight,
            habilidades: data.abilities[0].ability.name
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

