import axios from "axios"
import { useState } from "react"
import Loader from "../../../../components/Loader/Loader"

const EditModal = ({id, name, closeModal, loadCases}) => {
    
    const [loading, setLoading] = useState(false)	
    const [caseEdited, setCaseEdited] = useState({
		name: '',
		link: ''
	})

    const handleInputChange = (event) => {
		setCaseEdited({
			...caseEdited,
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
			url: `http://localhost:8080/case/${id}`,
			data: caseEdited
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
					<legend>Editar Caso "{name}"</legend>
					<input type="text" name="name" id="name" placeholder='Nombre del caso' onChange={handleInputChange} required/>
					<input type="text" name="link" id="link" placeholder='Link del caso' onChange={handleInputChange} required/>
					{ caseEdited.name && caseEdited.link ?			
						<button type="submit">Editar</button>:
						<button type="submit" className='disabledBtn' disabled>Editar</button>
					}
					<button onClick={() => closeModal()}>Cancelar</button>
				</form>
			</div>
        </>
    )}

export default EditModal