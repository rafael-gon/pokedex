import { FaRulerVertical, FaWeightHanging } from "react-icons/fa";

function Pokemon(props: any) {
  return (
    <div className="flex flex-col w-auto h-auto justify-between py-1 px-5 bg-[#DEDEDE] text-[#D9D9D9] rounded-t-2xl rounded-br-2xl rounded-bl-[64px] gap-1 shadow-lg shadow-black">

      <div className="flex w-full justify-between items-center">
        <p className="text-sm font-normal bg-[#232323]  px-2 py-[2px] rounded-lg">#{props.id}</p>
        <div className="flex gap-2 items-center">
          <div className="w-[10px] h-[10px] border-2 border-[#40080E] bg-[#FE002C] rounded-full" />
          <div className="w-[10px] h-[10px] border-2 border-[#40080E] bg-[#FE002C] rounded-full" />
        </div>
        <div className="w-[52px] h-[20px]" />
      </div>

      <div className="bg-[#232323] p-2 rounded-lg flex h-80 items-center shadow-inner shadow-black">

        <div className="flex flex-col gap-1">

          <p className="text-xl font-normal capitalize">{props.name}</p>

          <p>{props.status}</p>

          <div className="w-[141px]">
            <p className="font-bold text-sm">Abilities:</p>
            <div className="flex flex-wrap gap-1">
              {props.abilities}
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-40">
          <img className="object-contain" width={160} height={160} src={props.img} alt={props.name} />
          <div className='flex gap-2 '>
            {props.type}
          </div>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <FaWeightHanging className="text-xs"/>
              <p className="text-[10px] font-normal">{props.peso / 10} Kg</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaRulerVertical className="text-xs"/>
              <p className="text-[10px] font-normal">{props.altura / 10} m</p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-between px-6">
        <a href={`https://pokemondb.net/pokedex/${props.name}`} target={"_blank"} className="w-7 h-7 border-2 border-[#40080E] bg-[#FE002C] rounded-full hover:brightness-75 transition-all" />
        
        <div className="flex flex-col gap-1">
          <div className="w-[100px] h-1 bg-[#40080E] rounded-full" />
          <div className="w-[100px] h-1 bg-[#40080E] rounded-full" />
          <div className="w-[100px] h-1 bg-[#40080E] rounded-full" />

        </div>
      </div>
    </div>
  );
}


export default Pokemon;
