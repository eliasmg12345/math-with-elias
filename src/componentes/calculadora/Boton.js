
const Boton = ({ children, manejarClic }) => {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '='); // si no es numero ni . ni = devuelve true
    }

    return (
        <div
            className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => manejarClic(children)}
        >

            {children}

        </div>
    )
}

export default Boton