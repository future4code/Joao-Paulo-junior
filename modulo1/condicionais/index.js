/*Exercícios de interpretação de código

1- Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza? 

Testa o resto da divisão de algum numero por 2 e sendo assim, o resto deve ser 0.

b) Para que tipos de números ele imprime no console "Passou no teste"? 

Números que a divisão do mesmo por dois é igual a 0.

c) Para que tipos de números a mensagem é "Não passou no teste"?

Números que a divisão do mesmo por dois é diferente de 0.

2- O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

Para cada fruta que o usuário fornece para o codigo, retorna a um valor respectivo de preço para cada 
uma delas. Se a variável fruta fornecida for igul ao que está no case, 
será executado o codigo de dentro, retornando ao valor da fruta em especifico.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

"O preço da maça é 2,25"

c) Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break` que está 
logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?



3- Leia o código abaixo:
   
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
    
    a) O que a primeira linha está fazendo?
    
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.