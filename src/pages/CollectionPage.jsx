import React, { useState, useEffect } from "react";
import { typeColors } from '../helpers/helpers'; 
import Button from "../components/Button";
import { Link } from "react-router-dom";


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
        <div className='collection-page'>
            <h1>My Collection</h1>
            {collection.length === 0 ? (
                <h3>Your collection is empty. Start adding Pokémon to your collection!</h3>
            ) : (
                <ul>
                    {collection.slice()
                        .sort((a, b) => a.pokemonId - b.pokemonId)
                        .map((pokemon) => {
                        const backgroundColor = typeColors[pokemon.types[0]?.toLowerCase()] || "#000000";
                        return (
                            <li
                                key={pokemon.pokemonId}
                                className="pokemon-list-item"
                                style={{ background: backgroundColor }}
                            >
                                <img src={pokemon.sprite} alt={pokemon.name} />
                                <span>#{pokemon.pokemonId} {pokemon.name}</span>
                                <Button className="deleteBtn" onClick={() => handleRemoveFromCollection(pokemon.pokemonId)}>X</Button>
                            </li>
                        );
                    })}
                </ul>
            )}
            <Link to="/">
                <Button className="home-button" icon="https://i.imgur.com/Rh1obTr.png">
                </Button>
            </Link>
        </div>
            
        </>
    );
}

export default CollectionPage;