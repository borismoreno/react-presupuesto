import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarpregunta(false);
    }
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="Error en el presupuesto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    className="u-full-width"
                    type="number"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;