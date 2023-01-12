import React from 'react'
import Boton from './Boton'
import BotonClear from './BotonClear'
import Pantalla from './Pantalla'
import { useState } from 'react'
import {evaluate} from 'mathjs'

const Calculadora = () => {

    const [input, setInput] = useState('');

    const agregarInput = valor => {
        setInput(input + valor);
    }

    const calcularResultado = () => {
        if (input) {
            setInput(evaluate(input))
        }else{
            alert('ingrese valores')
        }
    }

    return (
        <div>
            <div className='contenedor-calculadora'>
                <Pantalla
                    input={input}
                />
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>1</Boton>
                    <Boton manejarClic={agregarInput}>2</Boton>
                    <Boton manejarClic={agregarInput}>3</Boton>
                    <Boton manejarClic={agregarInput}>+</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>4</Boton>
                    <Boton manejarClic={agregarInput}>5</Boton>
                    <Boton manejarClic={agregarInput}>6</Boton>
                    <Boton manejarClic={agregarInput}>-</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>7</Boton>
                    <Boton manejarClic={agregarInput}>8</Boton>
                    <Boton manejarClic={agregarInput}>9</Boton>
                    <Boton manejarClic={agregarInput}>*</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={calcularResultado}>=</Boton>
                    <Boton manejarClic={agregarInput}>0</Boton>
                    <Boton manejarClic={agregarInput}>.</Boton>
                    <Boton manejarClic={agregarInput}>/</Boton>
                </div>
                <div className='fila'>
                    <BotonClear
                        manejarClear={() => setInput('')}
                    >
                        Clear
                    </BotonClear>
                </div>
            </div>

        </div>
    )
}

export default Calculadora