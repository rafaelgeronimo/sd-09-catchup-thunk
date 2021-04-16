import React from 'react';

class Exercicio3Thunk extends React.Component {

    render() {
        return (
            <div>
                <h1>Exercício 3 - Thunk</h1>
                <p>
                    Faça um componente que, ao ser montado, busque por todas as frutas e exibas em lista. 
                    Ao clicar em alguma delas, uma nova requisição deve ser feita para trazer somente as informações da fruta clicada.
                    Ahh, lembre-se que as informações da fruta clicada deve ir para a store do projeto :)
                </p>
                <ul>
                    {/* Frutas aqui :-) */}
                </ul>
                <div>
                    { /* Infos da fruta clicada aqui */}
                </div>
            </div>
        );
    }
}

export default Exercicio3Thunk;
