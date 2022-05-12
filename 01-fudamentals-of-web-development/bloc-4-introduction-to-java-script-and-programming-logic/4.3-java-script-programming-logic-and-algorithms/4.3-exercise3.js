// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggesWord = array[0];
let smallestWord = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > biggesWord.length) {
        biggesWord = array[i];
    }

    if (array[i].length < smallestWord.length) {
        smallestWord = array[i];
    }
};

console.log(biggesWord);
console.log(smallestWord);
