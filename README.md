Övningsuppgift - Pokemon Application

Er uppgift är att skapa ett gränssnitt där man kan få ut information om olika Pokemon.
API Endpoint: https://pokeapi.co/api/v2/pokemon?limit=151

Komponenter: 

<App>

<PokemonApplication>

<Pokemon>


1. Vid start av applikationen, ska användaren se en knapp med texten “Start Pokemon App”.

2. Vid klick på knappen, ska <PokemonApplication> renderas i DOM:en.

3. När <PokemonApplication/> renderas, ska det göras ett anrop mot API:et för att hämta data för samtliga 151 Pokemon, och spara datat i state.

4. I <PokemonApplication> ska ni sedan skapa dropdown-lista med samtliga namn på alla Pokemon som hämtats. Användaren ska kunna välja en Pokemon i dropdown-listan, och sedan klicka på knappen för att hämta data för sin valda Pokemon.

5. När användaren hämtar data för en Pokemon, rendera en <Pokemon>-komponent.

6. <Pokemon>-komponenten ska visa ut följande data för användarens val av Pokemon:

    - Namn

    - Bild på Pokemon

    - Typ/Typer din pokemon har (dvs “types” i API:et)

    - Vikt

    - Längd