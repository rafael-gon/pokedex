function Type(props: any){

  let color = '#A8A77A'
  if (props.type == 'normal' )
    color = '#A8A77A'
  if (props.type == 'fire' )
    color = '#EE8130'
  if (props.type == 'water' )
    color = '#6390F0'
  if (props.type == 'electric' )
    color = '#F7D02C'
  if (props.type == 'grass' )
    color = '#7AC74C'
  if (props.type == 'ice' )
    color = '#96D9D6'
  if (props.type == 'fighting' )
    color = '#C22E28'
  if (props.type == 'poison' )
    color = '#A33EA1'
  if (props.type == 'ground' )
    color = '#E2BF65'
  if (props.type == 'flying' )
    color = '#A98FF3'
  if (props.type == 'psychic' )
    color = '#F95587'
  if (props.type == 'bug' )
    color = '#A6B91A'
  if (props.type == 'rock' )
    color = '#B6A136'
  if (props.type == 'ghost' )
    color = '#735797'
  if (props.type == 'dragon' )
    color = '#6F35FC'
  if (props.type == 'dark' )
    color = '#705746'
  if (props.type == 'steel' )
    color = '#B7B7CE'
  if (props.type == 'fairy' )
    color = '#D685AD'

  return(
    <div className='flex gap-2 justify-center items-center rounded px-2 py-1' style={{backgroundColor: `${color}`}}>
      <h1 className="text-sm  text-black capitalize" >
        {props.type}
      </h1>
    </div>
  )
}

export default Type;