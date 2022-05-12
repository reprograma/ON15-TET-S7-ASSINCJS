setTimeout(() => {
    console.log('retorno primeira callback')
  }, 5000) //5 segs
  
  setTimeout(() => {
    console.log('retorno segunda callback')
  })
  
  console.log('console direto 1')
  
  setTimeout(() => {
    console.log('retorno terceira callback')
  }, 3000) // 3seg
  
  console.log('console direto 2')

  // O código vai primeiro executar tudo que é síncrono, isto é linha 9 e 15;
  // depois o que é assíncrono e não tem tempo, linha 5;
  // depois o que é assíncrono com tempo, primeiro o menor tempo, linha 11;
  // depois o maior tempo, linha 1.
  // No terminal fica:
  // console direto 1
  // console direto 2
  // retorno segunda callback
  // retorno terceira callback
  // retorno primeira callback