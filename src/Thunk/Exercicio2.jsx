import React from 'react';

class Exercicio2Thunk extends React.Component {

    render() {
        return (
            <div>
                <h1>Exercício 2 - Thunk</h1>
                <p>
                    Faça um componente que, ao ser montado, busque por todas as frutas e exibas em lista. 
                    Enquanto os dados não chegam, exiba uma mensagem de 'Carregando'
                </p>
                <ul>
                    {/* Frutas aqui :-) */}
                </ul>
            </div>
        );
    }
}

export default Exercicio2Thunk;
