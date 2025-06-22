import HomeBtn from '../components/HomeBtn';
import React, { useState, useEffect } from "react";
import { typeColors } from '../helpers/helpers'; 

function WishlistPage() {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token"); 

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
                                    style={{ background: backgroundColor }}
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