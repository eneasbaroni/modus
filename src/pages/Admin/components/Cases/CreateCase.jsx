import { useState } from "react"
import axios from "axios"
import Loader from "../../../../components/Loader/Loader"

const CreateCase = ({closeModal, loadCases}) => {
	const [loading, setLoading] = useState(false)
	const [caseCreated, setCaseCreated] = useState({
		name: '',
		link: ''
	})

	const handleInputChange = (event) => {
		setCaseCreated({
			...caseCreated,
			[event.target.name] : event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setLoading(true)		

		axios({
			method: 'post',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: 'https://modus-server-sjng.onrender.com/case',
			data: caseCreated
		})
		.then(res => {
			if (res.status === 200) {
				loadCases()
				closeModal()
				setLoading(false)
			}
		})
		.catch(err => {
			alert('Error al crear caso')
			closeModal()
			setLoading(false)
		})		
	}



	return (
		<>
			{loading && <Loader/>}
			<div className="createCaseContainer">
				<form className="actionForms" onSubmit={handleSubmit}>
					<legend>Crear Caso de Éxito</legend>
					<input type="text" name="name" id="name" placeholder='Nombre del caso' onChange={handleInputChange} required/>
					<input type="text" name="link" id="link" placeholder='Link del caso' onChange={handleInputChange} required/>
					{ caseCreated.name && caseCreated.link ?			
						<button type="submit">Crear</button>:
						<button type="submit" className='disabledBtn' disabled>Crear</button>
					}
					<button onClick={() => closeModal()}>Cancelar</button>
				</form>
			</div>
			
		</>
	)
}

export default CreateCase