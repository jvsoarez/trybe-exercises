// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const kingMoves = 'Rei -> Pode mover-se em qualquer direção, porém apenas uma casa por vez.';
const ladyMoves = 'Dama -> Pode mover-se em qualquer direção, quantas casas quiser, desde que estejam livres.';
const towerMoves = 'Torre -> Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';
const bishopMoves = 'Bispo -> Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, '
  + 'enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.';
const horseMoves = 'Cavalo -> É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas.';
const peonMoves = `Peão -> Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. 
  O peão é a única peça que não pode retroceder, 
  e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro.`

let chessPiece = 'Dama';

switch (chessPiece.toLocaleLowerCase()) {
  case 'rei':
    console.log(kingMoves);
    break;
  case 'Dama':
    console.log(ladyMoves);
    break;
  case 'torre':
    console.log(towerMoves);
    break;
  case 'bispo':
    console.log(bishopMoves);
    break;
  case 'cavalo':
    console.log(horseMoves);
    break;
  case 'peão':
    console.log(peonMoves);
    break;
  default:
    console.log('Peça não encontrada');
    break;
};