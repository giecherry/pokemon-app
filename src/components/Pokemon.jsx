import { useState, useEffect } from "react";
import { typeColors } from "../helpers/helpers"; 

function Pokemon({ pokemonInfo }) {
    const [pokemonData, setPokemonData] = useState({
        name: "",
        type: "",
        image: "",
    });

    useEffect(() => {
        if (pokemonInfo) {
            const name = pokemonInfo.name?.charAt(0).toUpperCase() + pokemonInfo.name?.slice(1);
            const type = pokemonInfo.types?.[0]?.type.name?.charAt(0).toUpperCase() + pokemonInfo.types?.[0]?.type.name?.slice(1);
            const image = pokemonInfo.sprites?.front_default;

            setPokemonData({ name, type, image });
        }
    }, [pokemonInfo]);

    const cardBackground = typeColors[pokemonData.type?.toLowerCase()] || "#f5f5f5";

    return (
        <>
            <div className="pokemon-card" style={{ background: cardBackground }}>
                <h1>{pokemonData.name}</h1>
                <div className="pokemon-img-container">
                    <img className="pokemon-img" src={pokemonData.image} alt={pokemonData.name} />
                </div>
                <div className="pokemon-textInfo">
                    <p>
                        <strong>Type:</strong>{" "}
                        <span style={{ background: cardBackground }} className="pokemon-type">
                            {pokemonData.type.toUpperCase()}
                        </span>
                    </p>
                    <p>
                        <strong>Weight:</strong> {(pokemonInfo.weight * 0.10).toFixed(1)} kg
                    </p>
                    <p>
                        <strong>Height:</strong> {(pokemonInfo.height * 0.10).toFixed(1)} m
                    </p>
                    <p>
                        <strong>HP:</strong> {pokemonInfo.stats?.[0]?.base_stat}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Pokemon;
