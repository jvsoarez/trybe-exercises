// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const sideA = 31;
const sideB = 49;
const sideC = 100;

if (sideA + sideB + sideC === 180) { 
  console.log(true);
} else if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
  console.log('Error: The angle of a triangle must be positive');
  } else {
    console.log(false);
};






