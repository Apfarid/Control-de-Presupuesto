import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid'

const Formulario = ({setGastoN, setCreatGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    
    
    const agregarGasto = e => {
        e.preventDefault()


        //validar
        if(cantidad < 1 || nombre.trim() === ''){
            setError(true)
            return;
        }


        //construir el gasto
        const gasto = {
            nombre, 
            cantidad,
            id: shortid.generate()
            
        }

        //pasar al gasto del componente principal
        setGastoN(gasto)
        setCreatGasto(true)

        //resetear el form 
        setNombre('')
        setCantidad(0)
    }








    return (
        <form 
            onSubmit={agregarGasto}
        >

            <h2>Agregar tus gstos aquí</h2>
            {error && <Error mensaje = 'Ambos campos son obligatorios'/>}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text" 
                    name=""
                    value = {nombre}
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number" 
                    name="" 
                    value={cantidad}
                    className="u-full-width"
                    placeholder="300"
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit" 
                value="Agregar Gasto"
                className="button-primary u-full-width"    
            />

        </form>
    );
};

export default Formulario;