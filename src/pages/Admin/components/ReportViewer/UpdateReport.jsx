import axios from "axios"
import { useState } from "react"
import Loader from "../../../../components/Loader/Loader"

const UpdateReport = ({userId, report, closeModal, loadReports}) => {
	const [loading, setLoading] = useState(false)


	const [reportUpdated, setReportUpdated] = useState({
		_id: report._id,
		fecha: report.fecha,
		informe: '',
		multimedia: "",
		/* estadistica: "", */
		grafico: ""
	})

	const handleInputChange = (event) => {
		setReportUpdated({
			...reportUpdated,
			[event.target.name] : event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		
		setLoading(true)
		
		axios({
			method: 'put',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: `https://modus-server-client.onrender.com/client/report`,	
			data: {
				userId,
				reportUpdated
			}	
		})
		.then(res => {			
			if (res.status === 200) {			
				loadReports()				
			}
		})
		.catch(err => {
			alert('Error al actualizar reporte')
			closeModal()
			setLoading(false)
		})
	}

	

	return (
		<>
			{loading && <Loader/>}
			<div className="updateReportContainer">
				<form className="actionForms" onSubmit={handleSubmit}>
						<legend>Actualizar Informe</legend> 				
						<input type="text" name="informe" id="informe" placeholder='Link a Informe en PDF' onChange={handleInputChange} required/>
						<input type="text" name="multimedia" id="Multimedia" placeholder='Link a archivo de Audio' onChange={handleInputChange} required/>
						<input type="text" name="grafico" id="grafico" placeholder='Link a Grafico' onChange={handleInputChange} required/>
						
			
						{ reportUpdated.informe && reportUpdated.multimedia  && reportUpdated.grafico ?
			
							<button type="submit">Actualizar</button>:
							<button type="submit" className='disabledBtn' disabled>Actualizar</button>
						}
							<button onClick={() => closeModal()}>Cancelar</button>
				</form>
			</div>
		</>
	)
}

export default UpdateReport