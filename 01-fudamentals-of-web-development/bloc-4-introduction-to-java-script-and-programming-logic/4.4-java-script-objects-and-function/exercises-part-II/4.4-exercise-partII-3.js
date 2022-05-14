// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function returnsIndexOfBiggestValue (array) {
    let biggestIndex = 0;
    for (let index in array) {
        if (array[index] < array[biggestIndex]) {
            biggestIndex = index
        };
    }
    return biggestIndex;
}

console.log(returnsIndexOfBiggestValue([2, 4, 6, 7, 10, 0, -3]));