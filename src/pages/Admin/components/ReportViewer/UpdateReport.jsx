import axios from "axios"
import { useState } from "react"
import Loader from "../../../../components/Loader/Loader"

const UpdateReport = ({userId, report, closeModal, loadReports}) => {
	const [loading, setLoading] = useState(false)


	const [reportUpdated, setReportUpdated] = useState({
		_id: report._id,
		fecha: report.fecha,
		nombre: report.nombre,
		informe: report.informe,
		informeMobile: report.informeMobile,
		multimedia: report.multimedia,
		/* estadistica: "", */
		grafico: report.grafico,
		carpeta: report.carpeta || ""
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
						<label>Nombre del Informe</label>
						<input type="text" name="nombre" id="nombre" placeholder='Nombre del Informe' defaultValue={report.nombre} onChange={handleInputChange} required/>				
						<label>Link a Informe en PDF Desktop</label>
						<input type="text" name="informe" id="informe" placeholder='Link a Informe en PDF Desktop' defaultValue={report.informe} onChange={handleInputChange} required/>				
						<label>Link a Informe en PDF Mobile</label>
						<input type="text" name="informeMobile" id="informeMobile" placeholder='Link a Informe en PDF Mobile' defaultValue={report.informeMobile} onChange={handleInputChange} required/>
						<label>Link a archivo de Audio</label>
						<input type="text" name="multimedia" id="Multimedia" placeholder='Link a archivo de Audio' defaultValue={report.multimedia} onChange={handleInputChange} required/>
						<label>Link a Gráfico</label>
						<input type="text" name="grafico" id="grafico" placeholder='Link a Gráfico' defaultValue={report.grafico} onChange={handleInputChange} required/>
						<label>Link a Carpeta compartida</label>
						<input type="text" name="carpeta" id="carpeta" placeholder='Carpeta compartida (opcional)' onChange={handleInputChange}/>	
			
						{ reportUpdated.nombre && reportUpdated.informe && reportUpdated.informeMobile && reportUpdated.multimedia  && reportUpdated.grafico ?			
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