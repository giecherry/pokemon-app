import HomeBtn from '../components/HomeBtn';
import React, { useState, useEffect } from "react";

function WishlistPage() {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token"); 

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

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/pokemon/wishlist", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                setWishlist(Array.isArray(data.wishlist) ? data.wishlist : []); 
            } catch (error) {
                console.error("Failed to fetch wishlist:", error);
                setWishlist([]);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, [token]);

    const handleRemoveFromWishlist = async (pokemonId) => {
        try {
            await fetch(`http://localhost:3001/api/pokemon/wishlist/${pokemonId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            setWishlist(wishlist.filter((pokemon) => pokemon.pokemonId !== pokemonId));
        } catch (error) {
            console.error("Failed to remove Pokémon from wishlist:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className='wishlist-page'>
                <h1>My Wishlist</h1>
                {wishlist.length === 0 ? (
                    <h3>Your wishlist is empty. Start adding Pokémon to your wishlist!</h3>
                ) : (
                    <ul>
                        {wishlist
                        .slice()
                        .sort((a, b) => a.pokemonId - b.pokemonId)
                        .map((pokemon) => {
                            const backgroundColor = typeColors[pokemon.types[0]?.toLowerCase()] || "#ffffff";
                            return (
                                <li
                                    key={pokemon.pokemonId}
                                    className="pokemon-list-item"
                                    style={{ backgroundColor }}
                                >
                                    <img src={pokemon.sprite} alt={pokemon.name} />
                                    <span>#{pokemon.pokemonId} {pokemon.name}</span>
                                    <button onClick={() => handleRemoveFromWishlist(pokemon.pokemonId)}>X</button>
                                </li>
                            );
                        })}
                    </ul>
                )}  
                <HomeBtn />  
            </div>
            
        </>
    );
}

export default WishlistPage;