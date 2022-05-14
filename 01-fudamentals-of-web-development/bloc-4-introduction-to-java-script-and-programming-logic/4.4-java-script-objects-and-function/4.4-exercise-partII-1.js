// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function checkPalindrome (word) {
    if (word === word.split('').reverse().join('')) {
        return(true);
    }
    return false;
}

console.log(checkPalindrome('hannah'))