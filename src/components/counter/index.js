import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

// importa tudo (* as) como counterActions
import * as counterActions from '../../store/counter/actions';

// const [numero, setNumero] = useState(0);
// return (
//     <div>
//         <h2>Contador</h2>
//         <button onClick={e => setNumero(numero + 1)}>Incrementar</button>
//         <button onClick={e => setNumero(numero - 1)}>Decrementar</button>
//     </div>
// )

export default () => {
    // hook para acessar um estado do redux store
    const numero = useSelector(state => state.counter);
    // hook que vai disparar a ação que que foi definida para ele fazer
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Contador: {numero}</h2>
            {/* quando clicar dispare a ação desejada */}
            <button onClick={() => dispatch(counterActions.incrementarContador())}>Incrementar</button>
            <button onClick={() => dispatch(counterActions.decrementarContador())}>Decrementar</button>
        </div>
    )
}

// por padrão temos um tipo e um dado
{/* <button onClick={() => dispatch({type: 'decrementar'})}>Incrementar</button> */}

// () os parênteses são utilizados quando não se está guardando nenhum valor do evento
// nesse exemplo o "e" n está sendo utilizado por isso parênteses pode ser empregado no lugar

// redux trabalha com ações e reduces, cada dado possui seu próprio reduce 