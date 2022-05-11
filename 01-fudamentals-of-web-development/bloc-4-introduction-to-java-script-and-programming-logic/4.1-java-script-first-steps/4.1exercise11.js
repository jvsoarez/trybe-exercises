// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salary = 3000.00;
let INSS;
let IR;

if (salary <= 1556.94) {
    INSS = salary * 0.08;
} else if (salary <= 3594.92) {
    INSS = salary * 0.11;
} else if (salary <= 5189.82) {
    INSS = 570.88;
}

const baseSalary = salary - INSS;

if (baseSalary <= 1903.98) {
    IR = 0;
} else if (baseSalary < 2826.66) {
    IR = (baseSalary * 0.075) - 142.80; 
} else if (baseSalary < 3751.06) {
    IR = (baseSalary * 0.15) - 354.80; 
} else if (baseSalary < 4664.68) {
    IR = (baseSalary * 0.225) - 636.13; 
} else {
    IR = (baseSalary * 0.275) - 869.36; 
}

const netSalary = baseSalary - IR;

console.log(netSalary);