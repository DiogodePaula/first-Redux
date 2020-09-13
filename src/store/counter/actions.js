export function incrementarContador(){
    return {
        type: 'incrementar'
    };
};

export function decrementarContador(){
    return{
        type: 'decrementar'
    }
}

// actions são o controle para saber quais ações tem dentro daquele reducer
// se der export default em uma delas 