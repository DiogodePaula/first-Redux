import React from 'react';
import {Provider} from  'react-redux';// para poder utilizar o redux aqui é necessário 
                                      // o provider que vem na dependência de react-redux.

import Counter from './components/counter';
import List from './components/list';

import store from './store';

export default () => {
    return (
        //para o provider prover aos que estão abaixo dele na hierarquia ele deve estar englobando o conteúdo alvo
        <Provider store={store}>    
            <div>
                <h1>Bombando</h1>
                <Counter />
                <List />
            </div>
        </Provider>
    )
}