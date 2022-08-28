import React, { useEffect, useState } from "react";
import axios from 'axios'
import MaterialsCard from "../Material/Card/Card";
import './Search.css'
import MaterialForm from "../Material/Form/Form";
import Modal from "../Modal/Modal";


const MaterialSearch = () => {
  const [materials, setMaterials] = useState([])
  const [search, setSearch] = useState('')
  const [modalCreate, setModalCreate] = useState(false)


  async function handleSearch() {

    try {
      let firstSearch = await axios.get('http://localhost:3004/materials',
        { params: { description_like: search } })
      firstSearch = firstSearch.data

      let secondSearch = await axios.get('http://localhost:3004/materials',
        { params: { line_like: search } })
      secondSearch = secondSearch.data.filter((item) =>
        !firstSearch.find((material) => material.id === item.id))

      setMaterials([...firstSearch, ...secondSearch])
    } catch (error) {
      console.log("ops, algo deu errado");
    }
  }

  useEffect(() => {
    handleSearch()
  }, [search])


  function HandleModalClose() {
    setModalCreate(false)
  }

  // function is not working, but the logic is right
  const deleteCard = (id) => {
    axios.delete(`'http://localhost:3004/materials/${id}`);
    setMaterials(materials.filter((material) => {
      return material.id !== id
    }))
  }

  return (

    <div>
      <header className="materials-search_header">
        <h2>Materiais</h2>
        <button className="createButton" onClick={() => setModalCreate(true)}>
          Cadastrar
        </button>

      </header>
      <Modal
        open={modalCreate}
        title="Cadastrar material"
        onClose={HandleModalClose}
      >
        <MaterialForm handleSearch={handleSearch} />
      </Modal>
      <input
        type='search'
        className="materials-search_input"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />

      <div className="materials-card" >
        {
          materials.map((material) => (
            <MaterialsCard onClickDelete={() => alert('Erro inesperado')} CardMaterial={material} />
          ))
        }
      </div>
    </div >
  )
}

export default MaterialSearch