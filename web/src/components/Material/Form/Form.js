import axios from "axios";
import React, { useState } from "react";
import './Form.css'

const default_material = {
	description: "",
	line: "",
	url_thumbnail: "",
	id: ''
}



const MaterialForm = (props) => {

	const [materialForm, setMaterialForm] = useState(default_material)

	function ChangeHandlerInputs(ev) {
		const { value, name } = ev.target

		setMaterialForm({ ...materialForm, [name]: value })
	}

	function createNewMaterial(ev) {
		ev.preventDefault()

		axios.post('http://localhost:3004/materials', materialForm)
			.then((res) => {
				setMaterialForm(default_material)
				props.handleSearch()
				alert('Cadastrado com Sucesso')
			});
	};

	return (
		<form className="form-cadastro-container" onSubmit={createNewMaterial}>
			<div>
				<label>
					Nome do material
				</label> <br />
				<input
					type='text'
					value={materialForm.description}
					name="description"
					className="form-input"
					placeholder="Magda Ice - PR83185"
					onChange={ChangeHandlerInputs}
					required={true}
				/>
			</div>
			<div>
				<label>
					Nome da linha
				</label><br />
				<input
					type='text'
					value={materialForm.line}
					name="line"
					className="form-input"
					placeholder="Coleção Pedras"
					onChange={ChangeHandlerInputs}
					required={true}
				/>
			</div>
			<div>
				<label>
					Link da imagem (opcional)
				</label><br />
				<input
					type='img'
					value={materialForm.url_thumbnail}
					name="url_thumbnail"
					className="form-input"
					placeholder="Ex: https://minha.com/imagem.jpg"
					onChange={ChangeHandlerInputs}
				/>
			</div>
			<button type="submit" className="button-cadastrar-form">Cadastrar</button>
		</form >
	)
}

export default MaterialForm