/*
console.log("Oi Elen")
console.log("Oieee")
console.log("Oi Bruna")
console.log("Oi Cris ")*/

//funcion

function somar(numero) {
    console.log(numero + numero)
    return numero + numero
}
//ou arrow function
somar = (numero) =>
    console.log(numero + numero)
return numero + numero
ou
let somat = () => {
        console.log(numero + numero)
        return numero + numero
    }
    //a sintaxe do arrow function
    () => {}




//arrow function
function somar(numero) {
    return numero + numero
}
//ou
somar1 = (numero) => {
    return numero + numero
}

//função assíncrona

function subtrair(num1, num2) {
    setTimeout(() + > {
        return num1 - num2
    }, 1000)
}

// fluxo síncrono/assíncrono    

console.log('Esse console vai retornar primeiro')

setTimeout(() => {
    console.log('Esse console vai retornar segundo')
}, 2000)

console.log('Esse console vai retornar terceiro')

//exemplo

let mostrarPrimeiraParte = () => {
    setTimeout(() => {
        return console.log("Esta mensagem deve ")
    }, 4000)
}

let mostrarSegundaParte = () => {
    setTimeout(() => {
        return console.log("completar esta!")
    }, 6000)
}

mostrarPrimeiraParte() mostrarSegundaParte()

//exemplo

let somar = (numero) => {
    console.log("primeiro print: " + (numero + numero))
    setTimeout(() => {
        console.log("segundo print: " + (numero + numero))
        return numero + numero
    }), 6000
}

let imprimirSoma = (resultadoSoma) => console.log("print: " + resultadoSoma)

imprimirSoma(somar(3))