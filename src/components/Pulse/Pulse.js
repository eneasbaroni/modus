import './Pulse.css'

const Pulse = ({foo}) => {
  return (
    <div className="circle-container" onClick={foo}>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
    </div>
  )
}

export default Pulse