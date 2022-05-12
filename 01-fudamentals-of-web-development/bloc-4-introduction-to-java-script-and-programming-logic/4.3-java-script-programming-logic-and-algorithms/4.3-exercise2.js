// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let newWord = '';

newWord = word.split('').reverse().join('')

console.log(newWord);

// outra solução possível:

let word2 = 'florinda';
let newWord2 = '';

for (let index = 0; index < word2.length; index += 1) {
    newWord2 += word2[word2.length - 1 - index];
  }
  
  console.log(newWord2);