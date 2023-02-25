import { BiArrowFromLeft, BiArrowFromRight, BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

function PageSelector(props: any) {
  return (
    <div className="flex items-center gap-3 font-bold">


      <a href={props.up}>
        <button disabled={props.page === 1} onClick={props.first} className='bg-[#00312C] text-white p-2 rounded-full'>
          <BiArrowToLeft className="text-xl"/>
        </button>
      </a>



      <a href={props.up}>
        <button disabled={props.page === 1} onClick={props.back} className='bg-[#00312C] text-white p-2 rounded-full'>
          <BiArrowFromRight className="text-xl"/>
        </button>
      </a>

      {props.page} of {props.total}

      <a href={props.up}>
        <button disabled={props.page === props.total} onClick={props.forward} className='bg-[#00312C] text-white p-2 rounded-full'>
          <BiArrowFromLeft className="text-xl"/>
        </button>
      </a >

      <a href={props.up}>
        <button disabled={props.page === props.total} onClick={props.last} className='bg-[#00312C] text-white p-2 rounded-full'>
          <BiArrowToRight className="text-xl"/>
        </button>
      </a>


    </div >
  )
}

export default PageSelector