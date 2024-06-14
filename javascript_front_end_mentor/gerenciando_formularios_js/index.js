const form = document.getElementById("form");

function headleSubmit(e) {
  e.preventDefault(); // Previne o comportamento padrão do evento, fezendo que o formulário não seja enviado.

//   Objeto vazio para receber os valores do formulário
  const data = {};
//   Recupera campos do formulário
  const fields = e.target.querySelectorAll("input", "select", "textarea");
//   Loop para armazenar no objeto vazio os dados que foi atribuido no formulário
  for (const field of fields) {
    data[field.name] = field.value;
  }

  console.log(data);
}
// Adiciona um ouvinte submit onde é chamado a função headleSubit para não enviar o formulário antes dos dados serem tratados
form.addEventListener("submit", headleSubmit);

/*-------------------------------------------------------------------------------------------------------------------------------------------- */

// Utilizando FormData para não recuperar os elementos do formuário do DOM
//Arrow functio para previnir o comportamento padrão do submit
headleSubmit = (e) => {
  e.preventDefault();

  //Armazena os dados do formulário recuperado pelo o construtor do Javascrip js chave/value
  const formData = new FormData(e.target); 
  //Converte os dados armazenados do formdata para objeto
  const data = Object.fromEntries(formData);

  //Simplificando o codigo acima em uma linha para armazenas os dados do formulário e converter para objeto 
//   const data = Object.fromEntries(new FormData(e.target));

  console.log(data);
};

form.addEventListener("submit", headleSubmit);
