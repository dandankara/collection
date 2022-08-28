import React from 'react'
import './Card.css'

const MaterialsCard = ({ CardMaterial, onClickDelete }) => {
	return (
		<div className='material-card-container'>
			<img className='material-card_image' src={CardMaterial.url_thumbnail} alt={CardMaterial.description} />
			<div className='material-card_infos'>

				<h3 className='material-card_description'>
					{CardMaterial.description}
				</h3>

				<span className='material_card_line'>
					<label>Linha: </label>{CardMaterial.line}
				</span>
			</div>
			<button className='buttonCard' onClick={onClickDelete}>Excluir</button>
		</div>
	)

}

export default MaterialsCard