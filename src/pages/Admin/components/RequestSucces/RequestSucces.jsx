import { Link } from 'react-router-dom'
import './RequestSucces.css'

const RequestSucces = ({succes}) => {
  return (
    <section id='requestSucces'>
      <div className='errorContainer'>
        <div>
          <h2>{succes}</h2>
          <Link to='/admin' className='btnError'>
            <button  type='button' name='button'>Volver al panel Admin</button>
          </Link>
        </div>        
      </div>
    </section>
  )
}

export default RequestSucces