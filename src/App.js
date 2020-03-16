import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';




const App = () => {
  
  //Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gasto, setGasto] = useState([]);
  const [gastoN, setGastoN] = useState({});
  const [creatGasto, setCreatGasto] = useState(false);
  
  

  
  //UseEffect que actualiza el restante
  useEffect( () => {
    if(creatGasto){

      //agreaga el nuevo presupuesto
      setGasto([
        ...gasto,
        gastoN
      ])

      //resta del presupuesto actual
      const presupuestoRestante  = restante - gastoN.cantidad
      setRestante(presupuestoRestante)

      //resetear a false
      setCreatGasto(false)
    }

  }, [gastoN, creatGasto, gasto, restante])




  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          { mostrarPregunta ?
            (<Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGastoN = {setGastoN}
                    setCreatGasto = {setCreatGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gasto  = {gasto}
                  />
                  <ControlPresupuesto
                    presupuesto = {presupuesto}
                    restante = {restante}                  
                  />
                </div>
              </div>

            )
          
          
          }

        </div>
      </header>
    </div>
  );
};

export default App;