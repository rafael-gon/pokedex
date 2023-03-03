import { BiArrowFromLeft, BiArrowFromRight} from "react-icons/bi";
import Pokemon from '../components/pokemon';
import Status from '../components/status';
import Type from '../components/type';
import React, { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [old, setOld] = useState(true);
  const [page , setPage] = useState<number>(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 12}&limit=12`);
      const data = await response.json();
      const results = data.results;
      const pokemonData: any = await Promise.all(results.map(async (result: { url: RequestInfo | URL; }) => {
        const response = await fetch(result.url);
        const data = await response.json();
        return data;
      }));
      setPokemons(pokemonData);
    }
    fetchData();
  }, [page]);

  console.log(page)


  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-10 p-8 bg-[#5B0816] text-[#F2F4E7]">


      <div className='flex gap-2 items-center'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-[#9b0f26] px-6 py-3 font-bold rounded border-2 border-black disabled:brightness-75">
          <BiArrowFromRight />
        </button>
        
        {(page > 6) ? <div className='flex gap-2'>
        <p onClick={() => setPage(1)} className="cursor-pointer">1</p> 
        <p onClick={() => setPage(2)} className="cursor-pointer">2</p>
        <p onClick={() => setPage(3)} className="cursor-pointer">3</p>
        </div>
         : ""}
        {(page == 6) ? <div className='flex gap-2'>
        <p onClick={() => setPage(1)} className="cursor-pointer">1</p> 
        <p onClick={() => setPage(2)} className="cursor-pointer">2</p>
        </div>
         : ""}
        {(page == 5) ? <p onClick={() => setPage(1)} className="cursor-pointer">1</p> : ""}
        {(page >= 5) ? <p className="select-none">•••</p> : ""}
        {(page >= 4) ? <p onClick={() => setPage(page-3)} className="cursor-pointer">{page-3}</p> : ""}
        {(page >= 3) ? <p onClick={() => setPage(page-2)} className="cursor-pointer">{page-2}</p> : ""}
        {(page >= 2) ? <p onClick={() => setPage(page-1)} className="cursor-pointer">{page-1}</p> : ""}
        
        <strong className='text-blue-600'>{page}</strong>
        
        {(page <= 80) ? <p onClick={() => setPage(page+1)} className="cursor-pointer">{page+1}</p> : ""}
        {(page <= 79) ? <p onClick={() => setPage(page+2)} className="cursor-pointer">{page+2}</p> : ""}
        {(page <= 78) ? <p onClick={() => setPage(page+3)} className="cursor-pointer">{page+3}</p> : ""}


        {(page <= 80) ? <p className="select-none">•••</p> : ""}

        {(page < 82) ? <p onClick={() => setPage(82)} className="cursor-pointer">82</p> : ""}
        {(page < 83) ? <p onClick={() => setPage(83)} className="cursor-pointer">83</p> : ""}
        {(page < 84) ? <p onClick={() => setPage(84)} className="cursor-pointer">84</p> : ""}

        

        <button onClick={() => setPage(page + 1)} disabled={page === 84} className="bg-[#9b0f26] px-6 py-3 font-bold rounded border-2 border-black disabled:brightness-75">
          <BiArrowFromLeft />
        </button>
      </div>

      <button onClick={() => setOld(!old)} className="bg-[#9b0f26] px-6 py-3 font-bold rounded border-2 border-black">
        {
          old ? 'Show old Sprites' : 'Show new Sprites'
        }
      </button>
      <div className="flex flex-wrap gap-14 justify-center">

        {pokemons.map((pokemon: any, index) => {
          return (
            <Pokemon
              key={index}
              name={pokemon.name}
              id={pokemon.id}
              img={
                (old == true)
                  ? pokemon.sprites.other['official-artwork'].front_default
                  : pokemon.sprites.front_default
              }
              peso={pokemon.weight}
              altura={pokemon.height}
              abilities={
                pokemon.abilities.map((ability: {
                  is_hidden: boolean; ability: { name: string };
                }, index: React.Key) => (
                  <div key={index}>
                    {
                      (ability.is_hidden == true) ?
                        <p className="text-[#BB6C6C] font-light text-xs capitalize">
                          {ability.ability.name?.replace('-', ' ')}-hidden
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
      <div className='flex gap-2 items-center'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-[#9b0f26] px-6 py-3 font-bold rounded border-2 border-black disabled:brightness-75">
          <BiArrowFromRight />
        </button>
        
        {(page > 6) ? <div className='flex gap-2'>
        <p onClick={() => setPage(1)} className="cursor-pointer">1</p> 
        <p onClick={() => setPage(2)} className="cursor-pointer">2</p>
        <p onClick={() => setPage(3)} className="cursor-pointer">3</p>
        </div>
         : ""}
        {(page == 6) ? <div className='flex gap-2'>
        <p onClick={() => setPage(1)} className="cursor-pointer">1</p> 
        <p onClick={() => setPage(2)} className="cursor-pointer">2</p>
        </div>
         : ""}
        {(page == 5) ? <p onClick={() => setPage(1)} className="cursor-pointer">1</p> : ""}
        {(page >= 5) ? <p>•••</p> : ""}
        {(page >= 4) ? <p onClick={() => setPage(page-3)} className="cursor-pointer">{page-3}</p> : ""}
        {(page >= 3) ? <p onClick={() => setPage(page-2)} className="cursor-pointer">{page-2}</p> : ""}
        {(page >= 2) ? <p onClick={() => setPage(page-1)} className="cursor-pointer">{page-1}</p> : ""}
        
        <strong className='text-blue-600'>{page}</strong>
        
        {(page <= 80) ? <p onClick={() => setPage(page+1)} className="cursor-pointer">{page+1}</p> : ""}
        {(page <= 79) ? <p onClick={() => setPage(page+2)} className="cursor-pointer">{page+2}</p> : ""}
        {(page <= 78) ? <p onClick={() => setPage(page+3)} className="cursor-pointer">{page+3}</p> : ""}


        {(page <= 80) ? <p>•••</p> : ""}

        {(page < 82) ? <p onClick={() => setPage(82)} className="cursor-pointer">82</p> : ""}
        {(page < 83) ? <p onClick={() => setPage(83)} className="cursor-pointer">83</p> : ""}
        {(page < 84) ? <p onClick={() => setPage(84)} className="cursor-pointer">84</p> : ""}

        

        <button onClick={() => setPage(page + 1)} disabled={page === 84} className="bg-[#9b0f26] px-6 py-3 font-bold rounded border-2 border-black disabled:brightness-75">
          <BiArrowFromLeft />
        </button>
      </div>
    </div>
  );
}

export default App;



