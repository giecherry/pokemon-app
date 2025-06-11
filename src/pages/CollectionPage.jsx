import HomeBtn from '../components/HomeBtn';
import React, { useState, useEffect } from "react";

function CollectionPage() {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token"); 

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/pokemon/collection", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                if (data.collection.length === 0) {
                    console.log("Collection is empty or not an array");
                }
                setCollection(Array.isArray(data.collection) ? data.collection : []); 
        
            } catch (error) {
                console.error("Failed to fetch collection:", error);
                setCollection([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCollection();
    }, [token]);

    const handleRemoveFromCollection = async (pokemonId) => {
        try {
            await fetch(`http://localhost:3001/api/pokemon/collection/${pokemonId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            setCollection(collection.filter((pokemon) => pokemon.pokemonId !== pokemonId));
        } catch (error) {
            console.error("Failed to remove Pokémon from collection:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>My Collection</h1>
            {collection.length === 0 ? (
                <p>Your collection is empty. Start adding Pokémon to your collection!</p>
            ) : (
                <ul>
                    {collection.map((pokemon) => (
                        <li key={pokemon.pokemonId}>
                            <img src={pokemon.sprite} alt={pokemon.name} />
                            <span>{pokemon.pokemonName}</span>
                            <span>Type: {pokemon.types.join(", ")}</span>
                            <button onClick={() => handleRemoveFromCollection(pokemon.pokemonId)}>
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

export default CollectionPage;