/*Exercícios de interpretação de código

1- Leia o código abaixo:

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console?

Matheus Nachtergaele
Virginia Cavendish

canal: "Globo"
horario: "14h"

2- Leia o código abaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?

idade: 3
nome: "Juca"
raca: "SRD"

idade: 3
nome: "Juba"
raca: "SRD"

idade: 3
nome: "Jubo"
raca: "SRD"

3- Leia o código abaixo:

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?

false */





