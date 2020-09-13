import React from 'react';
import {useSelector} from 'react-redux';

export default () => {
    const numero = useSelector(state => state.counter);

    return (
        <>
        <div>
            <h2>Contador da lista:{numero}</h2>
        </div>
        <div>
            <h2>Lista de produtos</h2>
            <ul>
                {ListeningStateChangedEvent.map(product => <li key={product}></li>)}
            </ul>
        </div>
        </>
    )
}

