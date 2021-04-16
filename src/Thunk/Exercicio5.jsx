import React from 'react';

class Exercicio5Thunk extends React.Component {

    render() {
        return (
            <div>
                <h1>Exercício 5 - Thunk</h1>
                <p>
                    Faça um componente que, de 10 em 10 segundos, 
                    sorteie uma coordenada aleatória e exiba as informações sobre o clima do lugar.
                    A coordenada inicial deverá ser -17.3707 para latitude e -56.8040 para longitude (coordenadas do pantanal mato-grossense)
                    Obs: As coodenadas vão de: (valores aproximados)
                        latitude: -179 até 179
                        longitude: -84 até 84
                    Utilizem 4 casas decimais de precisão
                </p>
                { /* Infos aqui :) */ }
            </div>
        );
    }
}

export default Exercicio5Thunk;
