function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const daysUl = document.querySelector('#days');

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const daysOfCalendar = () => {
  for (let i = 0; i < dezDaysList.length; i+= 1) {
    const dayOfMouth = dezDaysList[i];
    const daysList = document.createElement('li');
   
    if (dayOfMouth === 24 | dayOfMouth === 31) {
      daysList.className = 'day holiday';
      daysList.innerText = dayOfMouth;
      daysUl.appendChild(daysList);
    } else if (dayOfMouth === 4 | dayOfMouth === 11 |
      dayOfMouth === 18 ) {
        daysList.className = 'day friday';
        daysList.innerText = dayOfMouth;
        daysUl.appendChild(daysList);
      } else if (dayOfMouth === 25) {
        daysList.className = 'day holiday friday';
        daysList.innerText = dayOfMouth;
        daysUl.appendChild(daysList);
      } else {
        daysList.className = 'day';
        daysList.innerText = dayOfMouth;
        daysUl.appendChild(daysList);
      }

    }
}

daysOfCalendar();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

const btnContainer = document.querySelector('.buttons-container'); 

const createButtonOrElement = (nameButton, idButton, father, tagCreate) => {
  let myTag = document.createElement(tagCreate);
  myTag.innerText = nameButton;
  myTag.id = idButton;
  father.appendChild(myTag);
}

createButtonOrElement('Feriados', 'btn-holiday', btnContainer, 'button' );

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

const buttonHoliday = document.getElementById('btn-holiday');
const holidayDays = document.getElementsByClassName('holiday');

const eventButton = (button) => {
  button.addEventListener('click', () => {
    for (let i = 0; i < holidayDays.length; i += 1) {
     if (holidayDays[i].style.backgroundColor === 'white') {
      holidayDays[i].style.backgroundColor = 'rgb(238,238,238)';
     } else {
      holidayDays[i].style.backgroundColor = 'white';
     }
    }
  
  })
}

eventButton(buttonHoliday);

// Exercício 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

const container = document.querySelector('.buttons-container');

createButtonOrElement('Sexta-feira', 'btn-friday', container, 'button');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.


const fridayBtn = document.querySelector('#btn-friday');
const fridays = document.querySelectorAll('.friday');
const fridayArray = [4,11,18,25];

const changeText = () => {
  fridayBtn.addEventListener('click', () => {
    for (let i = 0; i < fridays.length; i += 1) {
      console.log(typeof fridays[i].innerText)
      console.log(typeof fridayArray[i])
      if (fridays[i].innerText !== 'Sextou') {
        fridays[i].innerText = 'Sextou';
      } else {
        fridays[i].innerText = fridayArray[i];
      }
    }
  })
}

changeText();

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

const allDays = document.querySelector('#days');

const zoomFunc = () => {
  allDays.addEventListener('mouseover', (e) => {
    e.target.style.fontSize = '35px';
  })
  allDays.addEventListener('mouseout', (e) => {
    e.target.style.fontSize = '20px';
  })
}

zoomFunc();

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

const tasks = document.querySelector('.my-tasks')

const createTask = (taskName) => {
  const span = document.createElement('span');
  span.innerText = taskName;
  tasks.appendChild(span);
}

createTask('Estudar');

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

const funcColorLegend = (color) => {
  const newDiv = document.createElement('div');
  newDiv.className = 'task'
  newDiv.style.backgroundColor = color;
  tasks.appendChild(newDiv);
}

funcColorLegend('darkblue');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

const divTask = document.getElementsByClassName('task');

const selectedFunc = () => {
  divTask[0].addEventListener('click', (event) => {
    if (event.target.className !== 'task selected') {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
 })
}

selectedFunc();

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  // console.log(days);
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();