import { useState, useEffect } from "react";
import Pokemon from "./Pokemon.jsx";
import { useFetchData } from "../hooks/useFetchData";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

function PokemonApplication() {
    const [showPokemon, setShowPokemon] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("abra");
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [message, setMessage] = useState("");
    const token = localStorage.getItem("token");

    const checkLoggedIn = () => {
        return !!token; 
    };

    const { data: wishlist, loading: wishlistLoading, error: wishlistError } = useFetchData(
        "http://localhost:3001/api/pokemon/wishlist",
        token
    );
    const { data: collection, loading: collectionLoading, error: collectionError } = useFetchData(
        "http://localhost:3001/api/pokemon/collection",
        token
    );

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
                setShowPokemon(true);
            } catch (error) {
                console.error("Failed to fetch Pokémon details:", error);
            }
        }
    };

    const handleRandom = async () => {
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        const randomPokemon = pokemons[randomIndex];
        setSelectedPokemon(randomPokemon.name);
        try {
            const response = await fetch(randomPokemon.url);
            const json = await response.json();
            setPokemonInfo(json);
            setShowPokemon(true);
        } catch (error) {
            console.error("Failed to fetch Pokémon details:", error);
        }
    };

    const handleAddToWishlist = async () => {
        if (!pokemonInfo) return;

        const wishlistArray = Array.isArray(wishlist?.wishlist) ? wishlist.wishlist : [];
        const alreadyInWishlist = wishlistArray.some((pokemon) => pokemon.pokemonId === String(pokemonInfo.id));

        if (alreadyInWishlist) {
            setMessage(`${pokemonInfo.name} is already in your wishlist!`);
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/pokemon/wishlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ pokemonId: pokemonInfo.id }),
            });

            if (response.ok) {
                setMessage(`${pokemonInfo.name} added to wishlist!`);
            } else {
                const errorData = await response.json();
                setMessage(errorData.error || "Failed to add to wishlist.");
            }
        } catch (error) {
            console.error("Failed to add Pokémon to wishlist:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    const handleAddToCollection = async () => {
        if (!pokemonInfo) return;

        const collectionArray = Array.isArray(collection?.collection) ? collection.collection : [];
        const alreadyInCollection = collectionArray.some((pokemon) => pokemon.pokemonId === String(pokemonInfo.id));

        if (alreadyInCollection) {
            setMessage(`${pokemonInfo.name} is already in your collection!`);
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/pokemon/collection", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ pokemonId: pokemonInfo.id }),
            });

            if (response.ok) {
                setMessage(`${pokemonInfo.name} added to collection!`);
            } else {
                const errorData = await response.json();
                setMessage(errorData.error || "Failed to add to collection.");
            }
        } catch (error) {
            console.error("Failed to add Pokémon to collection:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="pokemon-app-container">
                <img src="https://assets.pokemon.com/static2/_ui/img/chrome/loaders/pokeball_gray.png" alt="" style={{ width: "50px", height: "50px" }} />
                <div className="filter-container">
                    <label htmlFor="pokemon-select" style={{ marginRight: "5px" }}>Choose a Pokemon: </label>
                    <div>
                        <select id="pokemon-select" onChange={handleSelection}>
                            {pokemons.slice().sort((a, b) => a.name.localeCompare(b.name)).map(pokemon => (
                                <option key={pokemon.url} value={pokemon.name}>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button className="show-button" onClick={handleClick}>
                        Show
                    </Button>
                    <Button className="random-button" onClick={handleRandom}>
                        Random
                    </Button>
                </div>
                {showPokemon && pokemonInfo && (
                    <div>
                        <Pokemon pokemonInfo={pokemonInfo} />
                        {checkLoggedIn() && (
                            <div className="action-buttons">
                                <Button className="addBtn" onClick={handleAddToWishlist}>
                                    Add to Wishlist
                                </Button>
                                <Button className="addBtn" onClick={handleAddToCollection}>
                                    Add to Collection
                                </Button>
                            </div>
                        )}
                    </div>
                )}
                {message && <p>{message}</p>}
                <Link to="/">
                    <Button className="home-button" icon="https://i.imgur.com/Rh1obTr.png">
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default PokemonApplication;

