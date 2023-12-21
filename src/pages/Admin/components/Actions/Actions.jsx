import { Link } from 'react-router-dom'
import './Actions.css'


const Actions = () => {
  return (
    <div id="adminActions">
      <Link to='/admin/clientes'>
       <button>Ver Clientes</button>
      </Link>
      <Link to='/admin/create-cliente'>      
        <button>Crear Cliente</button>
      </Link>
      <Link to='/admin/create-informe'>
        <button>Crear Informe</button>
      </Link>
      <Link to='/admin/message'>
        <button>Enviar Mensaje</button>
      </Link>
      <Link to='/admin/cases'>
        <button>Casos de Éxito</button>
      </Link>

    </div>
  )
}

export default Actions