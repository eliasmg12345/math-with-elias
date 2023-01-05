import '../hojas-de-estilo/Boton.css'

const Boton = ({texto, esBotonClic, manejarClic}) => {

  return (

    <div>
        <button
            className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}
        >
            {texto}
        </button>
    </div>
  )
}

export default Boton