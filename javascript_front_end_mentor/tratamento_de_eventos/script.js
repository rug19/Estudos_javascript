// Existe duas formas de adicionar um ouvinte a um elemento.

const myTitle = document.getElementById("title");
const buttonOpen = document.getElementById("open");
const buttonClose = document.getElementById("close");

// A primeira é atribuílo-lo diretamente á propriedade apropriada do elemento.
buttonOpen.onclick = function () {
  myTitle.style.backgroundColor = "red";
};

/*A segunda maneira de fazer isso é com o addEventListener método. Nesta abordagem, você passa o nome do evento como primeiro argumento e o
ouvinte do evento como segundo argumento.*/

buttonClose.addEventListener("click", function () {
  myTitle.style.backgroundColor = "yellow";
});

/*Arrow function (função de seta), Tem uma sintaxe mais simples mais simples e não possui todos os recurso de uma definição de função.
Isso resulta em algumas diferenças sutis.*/

buttonOpen.addEventListener("click", () => {
  myTitle.style.backgroundColor = "red";
});

// Functio vs arrow function

//this se refere ao button
buttonOpen.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});

//Para acessar o button com função de seta você deve passar um argumento para um argumento para o ouvinte de evento, que se refere ao própio evento.

buttonClose.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "gray"; //event.target é o elemento que foi clicado
  event.currentTarget.style.backgroundColor = "orange"; //evente,currentTarget é o button
});

// Frequentemente, você verá event um cucrto-circuito "e" e também poderá passá-lo para uma definição de função.

buttonClose.addEventListener("click", (e) => {
  e.target.textContent = "Voce me clicou";
});

//Loops

// Ás vezes queremos atribuir o mesmo ouvinte de evento a vários elementos. Digamos que queremos atribuir a cor de fundo de uma div com base no botão.

// Maneira sem o uso dos loops

// const screen = document.getElementById('screen');

// const blueButton = document.getElementById('blue');
// const redButton = document.getElementById('red');
// const greenButton = document.getElementById('green');

// blueButton.addEventListener('click', (e)=>{
// screen.style.backgroundColor = 'blue';
// });

// redButton.addEventListener('click', (e) => {
//    screen.style.backgroundColor = 'red';
// });

// greenButton.addEventListener('click', (e) =>{
//    screen.style.backgroundColor = 'green';
// });

// Com o Loop for

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

// for(let i = 0; i < buttons.length; i+=1 ){
//    buttons[i].addEventListener('click', (e)=>{
//       screen.style.backgroundColor = e.target.id;
//    });
// }

//Com o loop for .. in

//Itera sobre todas as propriedades enumeréveis de um objeto, que nesse caso é um array.
// for (const i in buttons) {
//   buttons[i].addEventListener("click", (e) => {
//     screen.style.backgroundColor = e.target.id;
//   });
// }

//Com o loop for .. of

// for (const button of buttons) {
//   button.addEventListener("click", (e) => {
//     screen.style.backgroundColor = e.target.id;
//   });
// }

//Com o loop forEach

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
   screen.style.backgroundColor = e.target.id;
  });
});
