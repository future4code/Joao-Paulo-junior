/* a) a) **Responda como comentário no seu código:
como fazemos para acessar os parâmetros passados na linha de comando para o Node?

A sintaxe é a seguinte: npm run <command> [-- <args>];

Usamos o process.argv.

b) Crie um programa que receba seu nome e sua idade. 
Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: 
"Olá, (Nome)! Você tem (sua idade) anos." */

const nome = process.argv[]
const idade = Number(process.argv[])

console.log("Olá, (Nome)! Você tem (sua idade) anos.")

c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.


