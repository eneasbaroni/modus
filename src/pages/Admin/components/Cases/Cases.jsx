import { useEffect, useState } from 'react'
import './Cases.css'
import axios from 'axios'
import Loader from '../../../../components/Loader/Loader'
import CreateCase from './CreateCase'
import ConfirmDelete from './ConfirmDelete'
import EditModal from './EditModal'

const Cases = () => {
	const [cases, setCases] = useState([])
	const [caseModal, setCaseModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const [idToEdit, setIdToEdit] = useState(null)
	const [caseNametoEdit, setCaseNameToEdit] = useState(null)
	const [editModal, setEditModal] = useState(false)
	const [idToDelete, setIdToDelete] = useState(null)
	const [deleteModal, setDeleteModal] = useState(false)

	useEffect(() => {
		loadCases()	  
	}, [])

	const loadCases = async () => {
		setLoading(true)
		axios({
			method: 'get',
			//origin: "http://localhost:3000", 
			withCredentials: true,
			url: 'https://modus-server-client.onrender.com/case',		  
		})
		.then(res => {
			if (res.status === 200) {
				setCases(res.data)
				setLoading(false)
		}
		})
		.catch(err => {
				alert ('Error al cargar casos')
				setLoading(false)
		})
	}	

	const openModal = () => {
		setCaseModal(true)
	}

	const closeModal = () => {
		setCaseModal(false)
	}

	const openEditModal = (id, name) => {		
		setIdToEdit(id)
		setCaseNameToEdit(name)
		setEditModal(true)
	}

	const closeEditModal = () => {
		setIdToEdit(null)
		setCaseNameToEdit(null)
		setEditModal(false)
	}

	const openDeleteModal = (id) => {
		setIdToDelete(id)
		setDeleteModal(true)
	}

	const closeDeleteModal = () => {
		setIdToDelete(null)
		setDeleteModal(false)
	}



	return (
		<>
			{loading && <Loader/>}
			{caseModal && <CreateCase closeModal={closeModal} loadCases={loadCases}/>}
			{deleteModal && idToDelete && <ConfirmDelete id={idToDelete} closeModal={closeDeleteModal} loadCases={loadCases}/>}
			{editModal && idToEdit && <EditModal id={idToEdit} name={caseNametoEdit} closeModal={closeEditModal} loadCases={loadCases}/>}
			<section id="cases">
				<h1>Casos de Éxito</h1>
				<button className='backButton' onClick={openModal}>Crear Caso</button>
				<div className='caseContainer'>
					{cases.length === 0 && <p>No se han cargado casos de éxito aun</p> }	
					{cases.length > 0 && 
						cases.map(c => (
							<div className="case" key={c._id}>
								<p>{c.name}</p>
								<p>{c.link}</p>
								<button onClick={() => openEditModal(c._id, c.name)}>Editar Caso</button>
								<button onClick={() => openDeleteModal(c._id)}>Borrar Caso</button>
							</div>
						))
					}	
				</div>
			</section>
		</>
	)
}

export default Cases