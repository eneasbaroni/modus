import axios from "axios"
import { useState } from "react"
import Loader from "../../../../components/Loader/Loader"


const ConfirmDelete = ({id, closeModal, loadCases}) => {
	const [loading, setLoading] = useState(false)	

	const deleteCase = (id) => {
		setLoading(true)
		axios({
			method: 'delete',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: `http://localhost:8080/case/${id}`,		
		})
		.then(res => {
			if (res.status === 200) {			
				loadCases()
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
						<h2>¿Seguro que quieres eliminar este caso?</h2>
						<p>Una vez eliminado no se podrá recuperar</p>
						<div>
							<button onClick={() => closeModal()}>Cancelar</button>
							<button onClick={() => deleteCase(id)}>Eliminar</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)


	
}

export default ConfirmDelete