// Exercícios de interpretação de código

// 1- As mensagens impressas no console serão: 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", true && false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", true && false && false) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", true)

console.log("d. ", typeof true)