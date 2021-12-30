import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    fetchPokemon(1)
})

const fetchPokemon = async(id) => {
    try {
        
        const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        const pokemon = {
            foto: data.sprites.other.dream_world.front_default
        }
        
        verPokemon();

    } catch (err) {
        console.log(err)
    }
}

const verPokemon = (pokemon) => {

}

