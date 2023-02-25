import ProgressBar from "@ramonak/react-progress-bar"

function Status(props: any) {
  // 100*status/maxstatus
  const maxHP = 255
  const maxATT = 180
  const maxDEF = 230
  const maxSATT = 180
  const maxSDEF = 230
  const maxSPD = 180
  let status = 0
  let name = ''


  if (props.statName == 'hp') {
    status = Math.round(props.baseStat * 100 / maxHP)
    name = "HP"
  }
  if (props.statName == 'attack') {
    status = Math.round(props.baseStat * 100 / maxATT)
    name = "Attack"
  }
  if (props.statName == 'defense') {
    status = Math.round(props.baseStat * 100 / maxDEF)
    name = "Defense"
  }
  if (props.statName == 'special-attack') {
    status = Math.round(props.baseStat * 100 / maxSATT)
    name = "Sp. Atk"
  }
  if (props.statName == 'special-defense') {
    status = Math.round(props.baseStat * 100 / maxSDEF)
    name = "Sp. Def"
  }
  if (props.statName == 'speed') {
    status = Math.round(props.baseStat * 100 / maxSPD)
    name = "Speed"
  }
  return (
    <div className="flex flex-col w-44 ">
      <p className="text-xs font-light">{name}</p>
      <div className="flex items-center gap-1 justify-between">
        <p className="text-xs font-normal">{props.baseStat}</p>
        <ProgressBar completed={status} height='8px' width='136px' bgColor="#79C672" baseBgColor="#D9D9D9" isLabelVisible={false} />  
      </div>

    </div>
  )
}

export default Status