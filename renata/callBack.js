/*
CALLBACK

* Função passada como argumento para outras funções

* Invocada 

**o callback é quando uma função é chamada na outra, mas o parâmetro pode ser uma String, um inteiro, e tbm pode ser uma função
**O parâmetro pode ser uma função, mas tbm pode ser só um nome (String)
**Para ser uma callback ele precisa ser uma função e ser passada no parametro da função


*/

// Exemplo 

// function elogiar (nome){
//     console.log(nome + ", você é linda!")
// }


// function lerEntrada(callback){
//     // let nome = "Liniker"
//     return callback(nome)
// }

// elogiar("julia")
// lerEntrada(elogiar)



// Exemplo 2

// function elogiar (nome){
//     console.log(nome + ", você é linda!")
// }

// function parabenizar (nome){
//     console.log(nome + ", parabéns pelo seu dia!")
// }

// function cumprimentar(nome,callback){
//     return callback(nome)
// }

// cumprimentar("Andressa", elogiar)
// cumprimentar("Carol", parabenizar)



// Exemplo 3

// function cumprimentar(callback){
//     let nome = "Liniker"
//     return callback(nome)
// }

// cumprimentar((nome) => {console.log(nome + ", vocé é feia!")})

// cumprimentar(function xingar(nome) {
//     console.log(nome + ", você é feia!")
// }
// )



