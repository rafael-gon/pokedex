interface Pokemon {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    }
  }[];
}

export async function fetchPokemonData(page: number): Promise<{ pokemons: Pokemon[], totalPages: number }> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 12}&limit=12`);
  const data = await response.json();
  const results = data.results;

  const pokemonData = await Promise.all(results.map(async (result: { url: string }) => {
    const response = await fetch(result.url);
    const data = await response.json();
    const name = data.name.replace('-', ' ');
    const formattedData = {
      ...data,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      id: data.id.toString().padStart(3, '0')
    };
    return formattedData;
  }));

  const filteredPokemonData = pokemonData.filter((pokemon) => pokemon.id <= 1008);
  const totalPages = Math.ceil(data.count / 12);

  return { pokemons: filteredPokemonData, totalPages };
}
