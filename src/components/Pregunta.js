import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({setRestante, setPresupuesto, setMostrarPregunta}) => {

    //Definir el State
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    
    

    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(
            parseInt(e.target.value,10)
        )
    }

    //Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()



        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return;
        }



        //Si pasa la validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)


    }

    




    
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error && <Error mensaje="El presupuesto es incorrecto"/>}
            <form
                onSubmit = {agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange= {definirPresupuesto}
                />

                <input 
                    type="submit" 
                    value="Definir Presupuesto"
                    className="u-full-width button-primary"
                />
            </form>
        </Fragment>
    );
};

export default Pregunta;