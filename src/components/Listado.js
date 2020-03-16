import React from 'react';
import Gasto from './Gasto';

const Listado = ({gasto}) => (
    <div className="gastos-realizados">
        <h2>Listado </h2>
        {gasto.map( item => (
            <Gasto
                key = {item.id}
                item = { item }
            />
        ))}
    </div>
)

export default Listado;