
/*Event Loop

Script.js - é o nosso código 

Console-log - resposta/retorno

Síncrono - executado linha a linha - imediatamente


Call Stack - processamento principal de um código síncrono/tread principal 


EVENT LOOP - gerencia a fila(Callback Queue e manda para o Call Stack)

(SetTimeOut, chamado backend, código assíncrono)

Callback Queue - fila de callbacks - retorno - Entra na fila para ser enviado para o Call Stack para ser processado


Web APi - códigos assíncronos são executados na WEB API, fora do código, em um banco de dados ou em outra API.
depois que ele é executado ele vai para a fila da Callback Queue 


Memory -  

*/

// Exemplo 

setTimeout(() => {
    console.log('retorno primeira callback')
  },5000)
  
  setTimeout(() => {
    console.log('retorno segunda callback')
  })
  
  console.log('console direto 1')
  
  setTimeout(() => {
    console.log('retorno terceira callback')
  }, 3000)
  
  console.log('console direto 2')
