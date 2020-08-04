import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({setGastoPrincipal, setCrearGasto}) => {
    const [gasto, setGasto] = useState({
        nombre: '',
        cantidad: 0
    });

    const [error, setError] = useState(false);
    
    const asignarGasto = e => {
        setGasto({
            ...gasto,
            [e.target.name]: e.target.value
        });
    }

    const agregarGasto = e => {
        e.preventDefault();
        if (nombre.trim() === '' || cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        setError(false);
        setGastoPrincipal(gasto);
        setCrearGasto(true);
        gasto.id = shortid.generate();
        setGasto({
            nombre: '',
            cantidad: 0
        })
    }
    
    const {nombre, cantidad} = gasto;
    return ( 
        <form
            onSubmit={agregarGasto}
            autoComplete="off"
        >
            <h2>Ingresa tus gastos aqui</h2>
            { error ? <Error mensaje="Todods los campos son obligatorios"/> : null }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={asignarGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    name="cantidad"
                    value={cantidad}
                    onChange={asignarGasto}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;