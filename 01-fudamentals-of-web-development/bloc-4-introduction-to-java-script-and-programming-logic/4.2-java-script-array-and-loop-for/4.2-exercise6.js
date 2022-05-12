let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let isOdd = 0;


for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) isOdd += 1;
};

if (isOdd) {
    console.log(`Existem ${isOdd} números impares do array!`);
} else {
    console.log("nenhum valor ímpar");
};
