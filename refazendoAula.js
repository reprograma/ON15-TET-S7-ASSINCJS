//function 

function somar(numero) {
    console.log(numero + numero)
    return numero + numero
}

//arrow function
somar = (numero) => {
        console.log(numero + numero)
        return numero + numero
    }
    () => {} // função anonima
console.log("*********************************************")
    //fluxo sincrono
console.log('Este console vai retornar primeiro')
setTimeout(() => { console.log('Este console vai retornar segundo') }, 2000)
console.log('Este console vai retornar terceiro')
console.log("*********************************************")
let mostrarPrimeiro = () => {
    setTimeout(() => {
        return console.log("esta mensagem deve ")
    }, 4000)
}
let mostrarSegundo = () => {
    setTimeout(() => {
        return console.log("Completar com esta!")
    }, 6000)
}

mostrarPrimeiro();
mostrarSegundo();

console.log( ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** )

let somare = (numero) => {
    console.log("Primeiro Print " +
        (numero + numero))
    setTimeout(() => {
        console.log(numero + numero)
        return numero + numero
    }), 6000
}
let imprimirSoma = (resultadoSoma) => console.log("print" + resultadoSoma)
imprimirSoma(somare(3));
console.log(".................................."); //callback
function elogiar(nome) { console.log(nome + ", Você é linda") }

function lerEntrada(callback) {
    let nome = "Liniker"
    return callback(nome)
}