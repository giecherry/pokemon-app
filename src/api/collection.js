import { authorizedFetch } from "./client";

// Fetch user's Pokémon collection
export async function getUserCollection() {
  return await authorizedFetch("/api/collection");
}

// Add a Pokémon to the collection
export async function addToCollection(pokemonId) {
  return await authorizedFetch(
    "/api/collection",
    {
      method: "POST",
      body: JSON.stringify({ pokemonId }),
    }
  );
}

// Remove a Pokémon from the collection
export async function removeFromCollection(
  pokemonId
) {
  return await authorizedFetch(
    `/api/collection/${pokemonId}`,
    {
      method: "DELETE",
    }
  );
}

// Fetch user's wishlist
export async function getUserWishlist() {
  return await authorizedFetch("/api/wishlist");
}

// Add a Pokémon to the wishlist
export async function addToWishlist(pokemonId) {
  return await authorizedFetch("/api/wishlist", {
    method: "POST",
    body: JSON.stringify({ pokemonId }),
  });
}

// Remove a Pokémon from the wishlist
export async function removeFromWishlist(
  pokemonId
) {
  return await authorizedFetch(
    `/api/wishlist/${pokemonId}`,
    {
      method: "DELETE",
    }
  );
}
