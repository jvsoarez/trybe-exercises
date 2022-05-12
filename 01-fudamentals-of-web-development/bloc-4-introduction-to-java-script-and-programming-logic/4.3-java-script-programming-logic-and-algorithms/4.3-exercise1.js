// 1 - crie um algoritmo que retorne o fatorial de 10.
// "O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero."

let number = 10;
let factorialOfNumber = 1;

for (let i = 10; i > 0; i -= 1) {
    factorialOfNumber *= i;
}

console.log(factorialOfNumber);