export default function (state = 0, action){
    switch (action.type) {
        //incrementar é o valor do tipo da minha ação
        case 'incrementar':
            return state + 1;
        case 'decrementar':
            return state - 1;
        default:
            return state;
    }
}

// o reducer é justamente usado quando eu quero compartilhar uma informação/pagina em mais de um componente 
// as ações n podem ter nomes repetidos