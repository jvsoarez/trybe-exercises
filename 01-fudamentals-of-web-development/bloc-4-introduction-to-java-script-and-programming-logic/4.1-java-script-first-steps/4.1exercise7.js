// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let avaliation = 100;

if (avaliation > 100 || avaliation < 0) {
  console.log("Erro: A nota não pode ser menor que 0 ou maior que 100!");
} else {
  if (avaliation >= 90) {
    console.log("A");
  } else if (avaliation >= 80) {
    console.log("B");
  } else if (avaliation >= 70) {
    console.log("C");
  } else if (avaliation >= 60) {
    console.log("D");
  } else if (avaliation >= 50) {
    console.log("E");
  } else {
    console.log("F");
  }
}
