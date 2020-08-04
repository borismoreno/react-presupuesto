import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ]);
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante)
      setCrearGasto(false);
    }

  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarpregunta? <Pregunta 
          setPresupuesto={setPresupuesto}
          setRestante={setRestante}
          setMostrarpregunta={setMostrarpregunta}
        />: 
        
        <div className="row">
          <div className="one-half column">
            <Formulario 
              setGastoPrincipal={setGasto}
              setCrearGasto={setCrearGasto}
            />
          </div>
          <div className="one-half column">
            <Listado
              gastos={gastos}
            />
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
