// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;

window.onload = () => {
  // Cor de fundo da tela;
  const select = document.querySelector('#select-background');
  select.addEventListener('change', () => {
    const selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;
    // console.log(select.selectedOptions);
    
    localStorage.setItem('backgroundColorEscolhidos', selected.value);
  });

  // Cor do texto;
  const text = document.querySelector('p');
  const selectOfText = document.querySelector('#select-text');
  selectOfText.addEventListener('change', () => {
    const selectedText = selectOfText.selectedOptions[0];
    text.style.color = selectedText.value;

    localStorage.setItem('fontColorEscolhido', selectedText.value);
  });

  // Tamanho da fonte;
  const input = document.querySelector('input[name="font-size"]');
  input.addEventListener('change', () => {
  text.style.fontSize = `${input.value}px`;
  localStorage.setItem('FontSizeEscolhido', `${input.value}px`);
  })

  // Preferências no localStorage;
  const savedBackgroundColor = localStorage.getItem('backgroundColorEscolhidos');
  const savedTextColor = localStorage.getItem('fontColorEscolhido');
  const savedFontSize = localStorage.getItem('FontSizeEscolhido');

  document.body.style.backgroundColor = savedBackgroundColor;
  text.style.color = savedTextColor;
  text.style.fontSize = savedFontSize;
}