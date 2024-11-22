import { useState, useEffect } from "react"

function Pokemon({pokemonInfo}) {

    let [pokemonType, setPokemonType] = useState("")
    let [pokemonName, setPokemonName] = useState("")
    let [pokemonImage, setPokemonImage] = useState("")

    useEffect (() => {handleInfo();},[pokemonInfo])  


    const handleInfo = () => {
        if (pokemonInfo) {
            setPokemonName(pokemonInfo.name?.charAt(0).toUpperCase() + pokemonInfo.name?.slice(1));
            setPokemonType(pokemonInfo.types?.[0]?.type.name?.charAt(0).toUpperCase() + pokemonInfo.types?.[0]?.type.name?.slice(1));
            setPokemonImage(pokemonInfo.sprites?.front_default);
        }
    };

    const typeColors = {
        normal: "linear-gradient(to bottom, #e0e0e0, #bdbdbd)", // Normal
        fire: "linear-gradient(to bottom, #ff7f00, #ff4500)",   // Fire
        water: "linear-gradient(to bottom, #1e90ff, #4682b4)",   // Water
        electric: "linear-gradient(to bottom, #ffeb3b, #fbc02d)", // Electric
        grass: "linear-gradient(to bottom, #32cd32, #228b22)",    // Grass
        ice: "linear-gradient(to bottom, #b2e0e6, #4682b4)",      // Ice
        fighting: "linear-gradient(to bottom, #8b4513, #a52a2a)", // Fighting
        poison: "linear-gradient(to bottom, #9b30b6, #8a2be2)",   // Poison
        ground: "linear-gradient(to bottom, #d2b48c, #a0522d)",   // Ground
        flying: "linear-gradient(to bottom, #87ceeb, #1e90ff)",   // Flying
        psychic: "linear-gradient(to bottom, #ba68c8, #8e24aa)", // Psychic
        bug: "linear-gradient(to bottom, #8bc34a, #4caf50)",      // Bug
        rock: "linear-gradient(to bottom, #8b4513, #d2691e)",     // Rock
        ghost: "linear-gradient(to bottom, #800080, #4b0082)",    // Ghost
        dragon: "linear-gradient(to bottom, #0000ff, #4682b4)",   // Dragon
    };

    const cardBackground = typeColors[pokemonType?.toLowerCase()] || "#f5f5f5";

    return (
        <>  
            <div className="pokemon-card" style={{background: cardBackground}}>
                    <h1>{pokemonName}</h1>
                    <div className="pokemon-img-container">
                        <img className="pokemon-img" src={pokemonImage} alt="Pokemon image"/>
                    </div>
                    <div className="pokemon-textInfo">
                        <p><strong>Type:</strong> {pokemonType}</p>
                        <p><strong>Weight:</strong> {(pokemonInfo.weight*0.10).toFixed(1)} kg</p>
                        <p><strong>Height:</strong> {(pokemonInfo.height * 0.10).toFixed(1)} m</p> 
                        <p><strong>HP:</strong> {pokemonInfo.stats?.[0]?.base_stat}</p>
                    </div>
            </div>
        </>
            
    )
}

export default Pokemon
