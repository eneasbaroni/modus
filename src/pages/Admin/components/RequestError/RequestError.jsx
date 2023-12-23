import { Link } from 'react-router-dom'
import './RequestError.css'

const RequestError = ({error, foo}) => {
  return (
    <section id='requestError'>
      <div className='errorContainer'>
        <div>
          <h2>{error}</h2>
          <button className='btnError' type='button' name='button' onClick={foo}>Volver a intentar</button>
          <Link to='/admin' className='btnError'>
            <button  type='button' name='button'>Volver a admin</button>
          </Link>
        </div>        
      </div>
    </section>
  )
}

export default RequestError
