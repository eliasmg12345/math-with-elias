import React from 'react'
import '../App.css'
import { setTask } from './firebase'

const Principal = () => {

  let inicial = {

  }

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    //name === 'title' ? inicial.title = value : inicial.description = value;
    inicial = {
      ...inicial,
      [name]: value,
    }

  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(inicial);
    setTask(inicial);
  }

  return (
    <div className='App'>
      <div className='contenedor-testimonio'>
        <img src={require('../imagenes/mat1.jpg')} alt='foto' />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Elias</p>
          <p className='cargo-testimonio'>Ingeniero</p>
          <p className='texto-testimonio'>lorem impsum</p>
        </div>
      </div>




      <form onSubmit={handleSubmit}>
        <label>titulo</label>
        <input type='text' name='title' onChange={handleChange} />
        <label>description:
          <textarea name='description' onChange={handleChange} />
        </label>

        <input type='submit' value='enviar' />
      </form>

    </div>
  )
}

export default Principal