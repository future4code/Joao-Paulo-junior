
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No comparador de Igualdade ${a}===${b} é ${a === b}`
    
}

    console.log(checarIgualdade(a, b));

// c-)Faça uma função chamada "verificaSeEMaior"

    function verificaSeEMaior(a, b) {

    return `No comparador de Maior que ${a}===${b} é ${a === b}`

{

console.log(verificaSeEMaior(a, b));



// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true 
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    const usuario1 = {
        nome: "Joao",
        idade: 23,
        senha: "030498",
        nacionalidade: "brasileira"
    }

    if(usuario1.idade > 18 && usuario1.senha.length >= 6 && usuario1.nacionalidade.toLowerCase() === "brasileira") {
        usuarios.push(usuario1)
    }

    return usuarios
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"

    const login = () => {
    const login = "labenu"

    const senha = prompt("Informe a sua senha: ")

    if(senha === login) console.log("Usuario Logado")  
    else console.log("Senha invalida")

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    let tempo = 0
    let data = new Date()
    

    const nome = "Joao"
    const vacina = "pfizer"

    if(vacina.toLowerCase() === "coronavac") {
        tempo = 28
    } else if (vacina.toLowerCase() === "astrazenica"){
        tempo = 90
    } else if(vacina.toLowerCase() === "pfizer") {
        tempo = 90
    }

    const hoje = data.getTime()

    const milissegundos1dia = 86400000

    const dataFormatada = dataAtualizada.toLocaleDateString("pt-br")
    
    const dataAtualizada = new Date(hoje + (tempo * milissegundos1dia))
    
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for (let i = 0 ; i < usuarios.lenght ; i++){
        console.log(usuarios[i])

}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }

    ]

        if( === ) console.log("Vacinacao Completa")  {

         } else console.log("Vacinaao Incompleta")

    `Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());