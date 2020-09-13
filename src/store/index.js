import {createStore, combineReducers} from 'redux';
import counter from './counter/reducers';
import list from './list/reducers';

const reducers = combineReducers({
    counter,
    list
})

const store = createStore(reducers); 

export default store;

// é cada dado que tem dentro do meu store
// reducer é encarregado de todas as ações que esse dado vai ter 
// quem importar esse store vai ser nosso container 
// aqui vai ficar armazenado nossos estados globais 