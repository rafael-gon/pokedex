import PageSelector from '../components/pageSelector';
import Pokemon from '../components/pokemon';
import Status from '../components/status';
import Type from '../components/type';
import React, { useEffect, useState } from 'react';
import { fetchPokemonData } from '../api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 12}&limit=12`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const results = data.results;
      const pokemonData: any = await Promise.all(results.map(async (result: { url: RequestInfo | URL; }) => {
        const response = await fetch(result.url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const name = data.name.replace('-', ' ');
        const formattedData = {
          ...data,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          id: data.id.toString().padStart(3, '0')
        };
        return formattedData;
      }));
      setPokemons(pokemonData.filter((pokemon: { id: number; }) => pokemon.id <= 1008));
    }

    fetchData();
  }, [page]);



  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8 bg-[#5B0816] text-[#F2F4E7]">

      <PageSelector
        first={() => setPage(1)}
        last={() => setPage(84)}
        back={() => setPage(page - 1)}
        forward={() => setPage(page + 1)}
        page={page}
        total={84}
      />

      <div className="flex flex-wrap gap-14 justify-center">

        {pokemons.map((pokemon: any, index) => {
          return (
            <Pokemon
              key={index}
              name={pokemon.name}
              id={pokemon.id}
              img={pokemon.sprites.front_default}
              peso={pokemon.weight}
              altura={pokemon.height}
              abilities={
                pokemon.abilities.map((ability: {
                  is_hidden: boolean; ability: { name: string }; }, index: React.Key) => (
                  <div key={index}>
                    {
                     (ability.is_hidden == true) ?
                        <p className="text-[#BB6C6C] font-light text-xs capitalize">
                          {ability.ability.name?.replace('-', ' ')}
                        </p>
                        : <p className='font-light text-xs capitalize'>
                          {ability.ability.name?.replace('-', ' ')}
                        </p>
                    }
                  </div>
                ))
              }
              status={
                pokemon.stats.map((stat: { base_stat: number; stat: { name: string; }; }) => (
                    <Status
                      key={stat.stat.name}
                      statName={stat.stat.name}
                      baseStat={stat.base_stat}
                    />
                ))
              }
              type={pokemon.types?.map((type: any, index: number) => (
                <Type type={type.type.name} key={index} />
              ))}
            />
          )
        })}

      </div>

      <PageSelector
        up="#"
        first={() => setPage(1)}
        last={() => setPage(84)}
        back={() => setPage(page - 1)}
        forward={() => setPage(page + 1)}
        page={page}
        total={84}
      />

    </div>
  );
}

export default App;



