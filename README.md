# On15-TodasEmTech-s7-JS-Assíncrono

Esta é a 7ª semana da turma online: Todas em Tech on15 - Back-end, nesta aula do dia 25/09/2021 teremos os seguintes conteúdos:

- Ciclo de vida de uma aplicação JavaScript;
  - setTimeout();
  - Event Loop;
- callbacks;
- Promises;
- async/await;
  - try/catch

<br>

## Apresentações

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=400 alt='selfie de Lilit, que tem cabelos longos, pretos e cacheados, amarrados num coque acima da cabe~ca caídos para o lado direito, usa blusa verde e tem ao fundo uma parede branca'>

[Lilit Bandeira](https://www.instagram.com/lilitbandeira), é uma travesti paraibana residente em São Paulo, trabalha como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam;

#### Contatos

- devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/ayanami.jpg' width=500 alt='personagem Ayanami Rei do anime Neon Genesis Evangelion, ela tem cabelos cinzas em corte chanel com franja, olhos vermelhos, um deles tapado por um curativo, veste um traje escolar tradicional do Japão, ao fundo o o teto de uma sala de aula'>

### Quem são as alunas?

<img src='./assets/jujutsu.jpg' width=500 alt='3 personagens do anime Jujutsu Kaisen, todas vestem terno colegial preto, cada uma está deferindo seu golpe, da esquerda para direita temos a primeira com cabelos longos verdes amarrados e olhos amarelos, segunda com cabelos castanhos claros chanel  e olhos da mesma cor e a terceira tem cabelos azuis clarinhos longos e soltos e olhos da mesma cor, a imagem é dividida em três partes por linhas pretas e o fundo tem fagulhas de poder do golpe de cada uma'>

## Acordos

- Manter atenção nas explicações e codar nos momentos definidos;
- Enviar dúvidas no chat para as monitoras ajudarem;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- As câmeras ligadas serão de grande apoio para mim!

## Plano de aula

### 1. Ciclo de vida das aplicações JavaScript

- Funções são o menor bloco de execução no JavaScript, um conjunto de instruções que executa uma tarefa ou calcula um valor;
- Funções síncronas: São funções que, quando chamadas, pausam a thread principal (script) para realizar seu processamento, depois retorna o valor final e continua a execução da linha de código na sequência;


<img src='./assets/sincrona.png' width=500 alt='bloco de texto com código javascript'>
<br><br>

- Funções assíncronas: Cria uma thread paralela, que será executada em segundo plano sem interromper o fluxo principal, logo toda função que depende de alguma execução externa e/ou possuem timer para retornarem, são executadas em background e ao fim serão retornadas através do Event Loop, tornando possível a continuação do fluxo da aplicação já que não trava o script (thread principal);

<img src='./assets/assincrona.png' width=500 alt='bloco de texto com código javascript'>
<br><br>

- A ordem com que seu código é escrito é diferente da ordem em que é executado;
- Logo é muito importante resolver de forma adequada a ordem com que seu código é executado para evitar problemas;

#### 1.1. `setTimeout()`

- É uma função do JavaScript que executa um bloco de código assíncronamente depois de um dado período de tempo, essa função recebe dois parâmetros, sendo o primeiro uma função callback e o segundo um intervalo de tempo em milissegundos (1000ms = 1s)

#### 1.2. Event Loop

- A fila de eventos (Event Loop) é responsável por enviar novas funções que foram resolvidas de forma assíncrona para a trilha principal de processamento (Call Stack), seguindo a estrutura de dados da fila (Callback Queue) assim mantendo a sequência correta de execução dos eventos/funções;

---
### 2. Callbacks

- É uma função passada como argumento para outra função, que será invocada dentro da função externa para completar uma determinada rotina/ação, podendo ser síncrona ou assíncrona;
- É o padrão assíncrono mais comum no JavaScript, sendo a base para lidar com execuções assíncronas na linguagem;
- Na programação assíncrona, callbacks são funções a serem executadas após um evento (como a resolução de uma requisição), permitindo operar livremente a partir do retorno de outras funções;

<br>
<img src='./assets/callback.png' width=500 alt='bloco de texto com código javascript'>

---
### 3. Promises

- Promise é um objeto do JavaScript que tem a função de lidar com assincronicidade através de estados;
- Funções assíncronas modernas retornam uma promise que representa a eventual falha ou conclusão de uma operação assíncrona, assim uma função assíncrona retorna um valor como uma função síncrona, porém no lugar do valor final, retorna uma promessa ao valor em algum momento no futuro;
- Ciclo de vida da Promisse (estados):

  | Estado     | Significado                                                                                  |
  | ---------- | -------------------------------------------------------------------------------------------- |
  | Pending    | Estado inicial, quando a promise ainda está em execução (não resolveu ou rejeitou)           |
  | Fulfilled  | Quando executou todas as operações com sucesso                                               |
  | Rejected   | Quando a execução finalizou com erro, falhou                                                 |
  | Settled    | Nome genérico para estado final de executado, independente de ter retornado sucesso ou erro  |

<br>
<img src='./assets/promise.png' width=500 alt='bloco de texto com código javascript'>
<br><br>

- Cria-se uma promise a partir da função construtora Promise passando como argumento uma callback que por sua vez recebe como argumentos os dois resultados possíveis para a promise: resolve ou rejeit, duas outras funções que executam o possível sucesso ou erro da promessa, respectivamente;
- `resolve()`: Função que executa caso a promise seja resolvida;
- `reject()`: Função que executa caso a promise seja rejeitada;
- Resolvemos as promises através de métodos próprios, que chamam as callbacks depois da conclusão da promise;
- `then()`: Método que ativa uma callback quando a promise for resolvida, o argumento desta callback é sempre o valor retornado na função resolve();
  - o then() retorna uma nova promise e por isso vários thens podem ser encadeados para casos onde existam duas ou mais operações assíncronas consecutivas, neste caso o valor do primeiro argumento de cada then encadeado será o valor do retorno do anterior; 
- `catch()`: Método que ativa uma callback quando a promise for rejeitada, o argumento desta callback é sempre o valor retornado na reject();
- `finally()` -  Método que ativa uma callback quando a promisse acabar, independente de ter sido resolvida ou rejeitada, não recebe como argumento o retorno de resolve() ou reject();

---
### 4. async/await

- As palavra-chaves async e await atuam como um 'açúcar sintático' em cima de promises, faciltando a visualização e tornando a leitura do código assíncrono mais próxima do código síncrono;
- Toda função que recebe o `async` se torna uma função assíncrona, que passa a retornar uma promise ao invés de retornar um valor diretamente, como uma promise o retorno desta função pode ser tratado com um then() normalmente;
- Uma função assíncrona espera a possibilidade de a palavra-chave await ser usada para invocar código assíncrono;
- `await` indica que o JavaScript deve esperar o retorno de uma promise para continuar a execução, importante usar apenas quando necessário tratar respostas de uma promise para não paralizar o fluxo, quando usado da maneira correta não altera a performance da aplicação;
-  o await só funciona dentro de funções assíncronas e é colocada na frente de qualquer função que retorne promise para pausar o código até que a promise seja resolvida, retornando o valor resultante; 
- Não precisa de funções para sincronizar os resultados;
- Outro método importante da promise é o `Promisse.all()` que recebe uma array de funções assincronas independentes entre si, evitando o uso de awaits que não sejam necessários;
- Facilita o tratamento de erros seja com menor encadeamento do .then() ou ainda com o uso de `try/catch`;

<img src='./assets/asyncawait.png' width=500 alt='bloco de texto com código javascript'>
<br>

#### 4.1. try/catch

- É usado para marcar um bloco que será testado (try) e especifica uma ação para que uma possível exceção(erro) seja capturada(catch);
- Ao usar o try é criado um bloco de código protegido, que caso ocorra algum erro neste bloco, a execução é desviada para o catch(), desta forma a aplicação não será quebrada e o erro poderá ser tratado e o código segue sua execução;
- O catch() é executado somente quando há alguma exceção no bloco try, caso contrário ele será ignorado, o argumento recebido pelo catch é a exceção ocorrida no bloco try e costuma ser chamada de err/error;

---
### 5. Desafio da semana

1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: `Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`

```
// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  setTimeout(() => {
    if (produto === "hormonios") {
      return {
        nome: "Hormônios",
        preco: 99.00
      }
    } else if (produto === "unhas gel") {
      return {
        nome: "Unhas em Gel",
        preco: 190.00
      }
    } else if (produto === "lace"){
      return {
        nome: "Lace",
        preco: 3900.00
      }
    } else {
      return "Produto não encontrado"
    }
  }, 2000)
}

// função que simula busca num banco que retorna o valor das parcelas:

function calcularParcela(preco) {
  let parcelasDesejadas = 10
  setTimeout(() => {
    return preco * parcelasDesejadas
  }, 2000)
}
```

2. Resolva usando async/await: 
  Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API" de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o preço em Real e retornar o valor final no console: `O preço final do seu produto é R$R$7474,08`

  dados:
  `const precoEmDolar = 1270  //preço em dólar`
  
```
function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.03",
        turismo: "5.17",
      });
    }, 1000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        juros1: 0.06,
        juros2: 0.11,
        message:
        "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

async function calcularValorEmReal(precoEmDolar) {
  try {} 
  catch (error) {}
}
```

---
## Referências
<br>

### [Slide da aula](https://docs.google.com/presentation/d/1rXgJK5y64Fywgz-4lZs13GpVzfCZYcYVtHWjs0X9Nto/edit?usp=sharing)
### [Slide do Ciclo de vida do JS (event loop):](https://drive.google.com/file/d/1pjX-6yLNn_vwvbZNFlyaXPtJ1sT6XI9m/view?usp=sharing)

<br>


| Conteúdo      | Fonte              | Link                                                                                                                                       |
| ------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| JS Assíncrono |  Medium            | https://medium.com/reactbrasil/como-o-javascript-funciona-o-event-loop-e-o-surgimento-da-programação-assíncrona-5-maneiras-de-18d0b8d6849a |
|               | The code Barbarian | https://thecodebarbarian.com/tag/asyncawait.html                                                                                           |
| Callbacks     | MDN                | https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function                                                                        |
|               | Medium             | https://medium.com/totvsdevelopers/entendendo-funções-callback-em-javascript-7b500dc7fa22                                                  |
| Promises      | MDN                | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise                                                   |
|               | MDN                | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises                                                               |
|               | Medium             | https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2                                                    |
| async/await   | MDN                | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function                                                |
|               | MDN                | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await                                                         |
| try/cacth     | MDN                | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch                                                   |
|               | DevMedia           | https://www.devmedia.com.br/javascript-try-catch/41019                                                                                     |
| outros links  | npm                | https://www.npmjs.com/package/node-fetch                                                                                                   |
|               | ReqRes             | https://reqres.in/#support-heading                                                                                                         |

####Extras

| Complementares  | Canal              | Link                                        |
| --------------- | ------------------ | ------------------------------------------- |
| JS Assíncrono   | DevPleno           | https://www.youtube.com/watch?v=7Bs4-rqbCQc |
| Callbacks       | Marco Bruno        | https://www.youtube.com/watch?v=0haWgdHFuJw |
| Promises        | Erick Wendel       | https://www.youtube.com/watch?v=_gmXKsVS40s |                
| async/await     | DevPleno           | https://www.youtube.com/watch?v=D01xWkT2W7c |

## Agradecimento:  

Todas as minhas professoras e amigas do {reprograma} com quem sempre aprendo ♥️



