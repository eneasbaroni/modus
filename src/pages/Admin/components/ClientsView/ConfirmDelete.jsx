import axios from "axios"
import { useState } from "react"
import Loader from "../../../../components/Loader/Loader"


const ConfirmDelete = ({id, closeModal, loadClients}) => {
	const [loading, setLoading] = useState(false)	

	const deleteClient = (id) => {
		setLoading(true)
		axios({
			method: 'delete',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: `http://localhost:8080/client/user/${id}`,		
		})
		.then(res => {
			if (res.status === 200) {			
				loadClients()
				closeModal()
				setLoading(false)
			}
		})
		.catch(err => {
			alert('Error al eliminar cliente')
			closeModal()
			setLoading(false)
		})	  
	
	  }

	return (
		<>
			{loading && <Loader/>}
			<div className="modalContainer">
				<div className='deleteModalContiner'>
					<div className='deleteModal'>
						<h2>¿Seguro que quieres eliminar este cliente?</h2>
						<p>Una vez eliminado no se podrá recuperar</p>
						<div>
							<button onClick={() => closeModal()}>Cancelar</button>
							<button onClick={() => deleteClient(id)}>Eliminar</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)


	
}

export default ConfirmDelete