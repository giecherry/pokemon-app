import { authorizedFetch } from './client';

// Example function: fetch current user’s Pokémon collection
export async function getUserCollection() {
  return await authorizedFetch('/api/collection');
}

// Example function: add a Pokémon to wishlist
export async function addToWishlist(pokemonId) {
  return await authorizedFetch('/api/wishlist', {
    method: 'POST',
    body: JSON.stringify({ pokemonId }),
  });
}

// Add more as needed: removeFromWishlist, updateCollection, etc.
