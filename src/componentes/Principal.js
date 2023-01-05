import React from 'react'
import '../hojas-de-estilo/Principal.css'

const Principal = (props) => {


  return (
    
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require(`../imagenes/mat${props.imagen}.jpg`)}
          alt='foto'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className='cargo-testimonio'>{props.cargo}</p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
      </div>

  )
}

export default Principal