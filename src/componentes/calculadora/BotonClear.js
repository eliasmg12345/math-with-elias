import '../../hojas-de-estilo/BotonClear.css'

const BotonClear = ({ children, manejarClear }) => (
    <div
        className='boton-clear'
        onClick={manejarClear}
    >
        {children}
    </div>
);

export default BotonClear