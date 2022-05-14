// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Valor esperado no retorno da função: 4.

function returnsIndexOfBiggestValue (array) {
    let biggestIndex = 0;
    for (let index in array) {
        if (array[index] > array[biggestIndex]) {
            biggestIndex = index
        };
    }
    return biggestIndex;
}

console.log(returnsIndexOfBiggestValue([2, 3, 6, 7, 10, 1]));
