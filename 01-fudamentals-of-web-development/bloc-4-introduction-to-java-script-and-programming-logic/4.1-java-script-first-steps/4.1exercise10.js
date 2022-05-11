// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule // quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const cost = 1000.00;
const valueOfSelling = 1499.00
const taxes = 1.2;
const unitsSold = 1000;
const costWithTaxez = cost * taxes;
const profitOfThousandUnit = (valueOfSelling - costWithTaxez) * unitsSold;


const positiveValue = taxes >= 0 && cost >= 0 && valueOfSelling >= 0;

if (!positiveValue) {
    console.log('Erro: Os valores devem ser positivos!')
} else {
    console.log(profitOfThousandUnit);
}
