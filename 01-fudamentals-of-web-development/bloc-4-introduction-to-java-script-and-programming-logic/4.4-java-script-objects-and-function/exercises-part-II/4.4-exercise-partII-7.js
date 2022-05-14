// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function checkEndOfWord(word, endWord) {
  let inverseWord = word.split('').reverse().join('');
  let inversEndWord = endWord.split('').reverse().join('');
  let result = false;
  for (let index = 0; index < inversEndWord.length; index += 1) {
    if (inverseWord[index] === inversEndWord[index]) {
      result = true;
    }
  }
  
  return result;
}

console.log(checkEndOfWord('victor', 'ctor'));
