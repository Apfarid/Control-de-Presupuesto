import React from 'react';

const Gasto = ({item}) => (
    <li className='gastos'>
        <p>
            {item.nombre}

            <span className="gasto">$ {item.cantidad}</span>

        </p>
    </li>
)

export default Gasto;