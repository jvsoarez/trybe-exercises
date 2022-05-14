// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function returnsNumberThatRepeatsMost(array) {
  let repeatedCounter = 0;
  let countNumber = 0;
  let indexRepeatedNumber = 0;
  for (let index in array) {
    for (let indexTwo in array) {
      if (array[index] === array[indexTwo]) {
        countNumber += 1;
      }
    }
    if (countNumber > repeatedCounter) {
      repeatedCounter = countNumber;
      indexRepeatedNumber = index;
    }
    countNumber = 0;
  }
  return array[indexRepeatedNumber];
}

console.log(returnsNumberThatRepeatsMost([2, 3, 2, 5, 8, 2, 3]));