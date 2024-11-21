import { useState, useEffect } from "react"
import Pokemon from "./Pokemon.jsx"
import icon from "../img/poke-grey-icon.png"

function PokemonApplication() {
    const [showPokemon, setShowPokemon] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur");
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const json = await response.json();
                setPokemons(json.results);
            } catch (error) {
                console.error("Failed to fetch Pokémon list:", error);
            }
        };
        getPokemons();
    }, []);

    const handleSelection = (e) => {
        setSelectedPokemon(e.target.value);
    };

    const handleClick = async () => {
        const selectedPokemonData = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

        if (selectedPokemonData) {
            try {
                const response = await fetch(selectedPokemonData.url);
                const json = await response.json();
                setPokemonInfo(json);
                setShowPokemon(true); // Display the Pokémon info
            } catch (error) {
                console.error("Failed to fetch Pokémon details:", error);
            }
        }
    };

    return (
        <>
        <div className="pokemon-app-container">
            <img src={icon} alt="" style={{width: "50px", height: "50px"}}/>
            <div className="filter-container">
                <label htmlFor="pokemon-select" style={{marginRight: "5px"}}>Choose a Pokemon: </label>
                <div className="custom-select">
                    <select id="pokemon-select" onChange={handleSelection}>
                    {pokemons.map(pokemon => <option key={pokemon.url} value={pokemon.name}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</option>)}
                </select>
                </div>
                <button onClick={handleClick}>Show</button>
                <button>Random</button>
            </div>
            {showPokemon && pokemonInfo && <Pokemon pokemonInfo={pokemonInfo} />}
        </div>
        </>
    )
}

export default PokemonApplication

