export default function(state = [], action){
    switch (action.type) {
        case 'addToList':
            return[...state, action.data]
            // 3 pontos mantem tudo que tem na lista e adiciona novos valorea 
        default:
            return state;
    }
}

// e sempre switch case