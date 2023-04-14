import './Pulse.css'

const Pulse = ({foo}) => {
  return (
    <div class="circle-container" onClick={foo}>
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
      <div class="circle circle-4"></div>
    </div>
  )
}

export default Pulse