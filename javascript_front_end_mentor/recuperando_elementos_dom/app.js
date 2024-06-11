//Podemos acessar os elementos usando o document object. Possui vários métodos para recuperar nós do DOM.

document.getElementById('title'); // Recupera um elemento com o ID fornecido 
document.getElementsByClassName('selected'); // Recupera todos os elementos com classe fornecida
document.querySelector('#title'); // Recupera o primeiro item que corresponde ao seletor 
document.querySelectorAll('.selected'); // Recupera todos os elementos que corresponde o seletor

// O mais de usar é o getElementById, pois é extramente rápido porque todos os elementos sçao indexados por seus ID no DOM.

const myTtitle = document.getElementById('my_title');

myTtitle.style.color = ' red'; //Manipulação do DOM.