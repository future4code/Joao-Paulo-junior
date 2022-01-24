/*A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: 
ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno. 
Refatore a função para o Typescript.*/


function checaTriangulo(a, b, c) {
  

    const a:string = process.argv[2]
    const b:string = process.argv[3]
    const a:string = process.argv[2]



    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  