//Trabalhando com funções

/*Utilizamos a palavra function para iniciar uma função, em seguinda damos um nome sempre sendo objetivo o que extamente aquela função irá fazer, 
pode ou não passar os argumentos e por ultimo passar o codigo do que aquela função irá fazer.*/
function soma(number1, number2) {
  return number1 + number2;
}

console.log(soma(3, 5));

//Podemos também passar a função para uma variavel

let calcularSoma = soma;

console.log(calcularSoma(2, 4));

//-----------------------------------------------------------------------------------//

// Arrow function

//Uma função simplificada, apenas atribuimos para uma variavel.

let multiplicacao = (a, b) => {
  return a * b;
};

console.log(multiplicacao(3, 5));

//---------------------------------------------------------------------------------//

//Escopo léxico
/*Permite acessar as variáveis que está em uma função que está dentro de uma outra função*/

function externa() {
  let menssagem = "Hello world!"

  function interna() {
    console.log(menssagem); // A função interna tem acesso à variável mensagem da função externa
  }

  interna()
}

externa() // Saída: Olá, mundo!

//---------------------------------------------------------------------------------//

//Hoisting




