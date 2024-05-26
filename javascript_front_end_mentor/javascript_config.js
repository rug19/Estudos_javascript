//Configurando o carregamento do script.

//Evento para acionar a execução do script assim que o navegador termina de carregar o DOM.
document.addEventListener("DOMContentLoaded", function () {});

// Cria uma função de iniciação para rodar o codigo
function initialize() {}

//Chama a função de iniciação quando o DOM for carregado.
document.addEventListener("DOMContentLoaded", initialize);

/*Outra forma é colocar o script no final antes da tag body, assim o o navegador vai executar cada
linha de codigo do HTML por vez e por ultimo será executado o javascript.*/

// defer atributo de script

//<script defer src="javascript_config.js"></script>

/* Utilizando o defer no script significa que o script antes  do DOMContentLoaaded evento ser disparado
mas depois que o restante do DOM for carregado. O outro beneficício é que o script será excutando de forma assícrona(ou seja, em segunda plano)
enquanto o navegador executa outras tarefas. Essa opção é mais utilizada*/
