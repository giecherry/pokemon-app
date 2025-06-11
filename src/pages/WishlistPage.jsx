import HomeBtn from '../components/HomeBtn';
import React, { useState, useEffect } from "react";

function WishlistPage({ token }) {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/pokemon/wishlist", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                setWishlist(Array.isArray(data) ? data : []); 
            if (wishlist.length === 0) {
                    console.log("Wishlist is empty or not an array");
                }
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
            <h1>My Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty. Start adding Pokémon to your wishlist!</p>
            ) : (
                <ul>
                    {wishlist.map((pokemon) => (
                        <li key={pokemon.pokemonId}>
                            <img src={pokemon.sprite} alt={pokemon.name} />
                            <span>{pokemon.pokemonName}</span>
                            <span>Type: {pokemon.types.join(", ")}</span>
                            <button onClick={() => handleRemoveFromWishlist(pokemon.pokemonId)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <HomeBtn />
        </>
    );
}

export default WishlistPage;