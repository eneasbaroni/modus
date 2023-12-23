import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContex'
import './Admin.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Welcome from './components/Welcome/Welcome'
import Actions from './components/Actions/Actions'
import { Link, useLocation } from 'react-router-dom'
import ClientsView from './components/ClientsView/ClientsView'
import CreateClient from './components/CreateClient/CreateClient'
import Report from './components/Report/Report'
import Messages from './components/Messages/Messages'
import ReportViewer from './components/ReportViewer/ReportViewer'
import Cases from './components/Cases/Cases'


const Admin = () => {
    const {user} = useContext (UserContext)  
	const [actualLocation, setActualLocation] = useState(null)
	const location = useLocation()

	useEffect(() => {
		setActualLocation(location.pathname)
	}, [location.pathname])
	

	 useEffect(() => {
		window.scrollTo(0, 0);
	  }, [location]); 




	return (
		<>
			<Header/>
			<main id="admin">

				{user ?
					<>
						{user.username === 'ModusAdmin' ? //CAMBIAR NOMBRE
							<>
								{actualLocation ==='/admin' && 
									<> 
										<Welcome/>
										<Actions/>
									</>
								}
								{actualLocation ==='/admin/cases' && <Cases/>}
								{actualLocation ==='/admin/clientes' && <ClientsView/>}
								{actualLocation ==='/admin/create-cliente' && <CreateClient/>}
								{actualLocation ==='/admin/create-informe' && <Report/>}
								{actualLocation ==='/admin/message' && <Messages/>}	
								{actualLocation && actualLocation.startsWith('/admin/reports') && <ReportViewer/>}	
								{actualLocation !=='/admin' && <Link to='/admin'><button className='backButton'>Volver  a Panel administrador</button></Link>}
							</>:
							<div id='noAccesContainer'>
								<h1>Acceso Denegado</h1>
								<p className='noAdminText'>Usted no tiene permisos de administrador</p>      
								<Link to='/'><button className='backButton backButtonB'>Ir a Home</button>  </Link>    
								<Link to='/profile'><button className='backButton'>Ir a Panel Usuario</button></Link> 
							</div>
						}
					</>:
					<Login/>
				}

			</main>
		</>
	)
}
export default Admin
