// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let arr = [];
let resultOfDivider = 0;

for (let i = 1; i <= 25; i += 1) {
    arr.push(i);
    resultOfDivider = i / 2;
    console.log(resultOfDivider);
};
