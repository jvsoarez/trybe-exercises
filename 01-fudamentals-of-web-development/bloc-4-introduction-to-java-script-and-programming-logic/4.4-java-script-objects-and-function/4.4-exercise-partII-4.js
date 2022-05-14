// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function returnsBiggestName (array) {
  let biggestName = array[0];
  for (let name in array) {
    if (array[name].length > biggestName.length) {
      biggestName = array[name];
    }
  }
  console.log(biggestName);
}

returnsBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
