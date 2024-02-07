const perguntas = [
  {
    pergunta: "Qual é a principal função do JavaScript?",
    respostas: [
      "Adicionar cores às páginas da web.",
      "Permitir a interação do usuário com a página web.",
      "Criar animações e efeitos visuais.",
    ],
    correta: 1,
  },
  {
    pergunta: "Como declarar uma constante em JavaScript?",
    respostas: [
      "var nomeDaVariavel = valor;",
      "let nomeDaVariavel = valor;",
      "const nomeDaVariavel = valor;",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é um tipo de dado primitivo em JavaScript?",
    respostas: [
      "Um objeto que armazena várias informações.",
      "Uma função que realiza uma tarefa específica.",
      "Um valor básico como string, number ou boolean.",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual a diferença entre '=='' e '===' em JavaScript?",
    respostas: [
      "Ambos comparam o valor e o tipo de dado das variáveis.",
      "Apenas '===' compara o tipo de dado das variáveis.",
      "Apenas '==' compara o valor das variáveis.",
    ],
    correta: 1,
  },
  {
    pergunta: "Como criar um loop que se repete 5 vezes?",
    respostas: [
      "for (var i = 0; i < 5; i++) {}",
      "while (i < 5) { i++; }",
      "do { i++; } while (i < 5);",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um bloco de código que pode ser reutilizado.",
      "Um objeto que armazena dados.",
      "Uma variável que armazena um valor.",
    ],
    correta: 0,
  },
  {
    pergunta: "Como adicionar um evento de clique a um botão em JavaScript?",
    respostas: [
      "Usando o método 'addEventListener'.",
      "Usando o método 'onclick'.",
      "Usando o método 'click'.",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um modelo que representa o conteúdo da página web.",
      "Uma biblioteca para criar gráficos e animações.",
      "Uma linguagem de programação para criar jogos.",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual a diferença entre 'this' e 'that' em JavaScript?",
    respostas: [
      "'this' se refere ao objeto atual, 'that' se refere ao objeto anterior.",
      "'this' se refere ao objeto global, 'that' se refere ao objeto local.",
      "'this' e 'that' são a mesma coisa.",
    ],
    correta: 0,
  },
  {
    pergunta: "Como usar o JavaScript para fazer uma requisição AJAX?",
    respostas: [
      "Usando o objeto 'XMLHttpRequest'.",
      "Usando a biblioteca 'jQuery'.",
      "Usando a biblioteca 'Fetch API'.",
    ],
    correta: 2,
  },
];

const quiz = document.querySelector('#quiz');

const template = document.querySelector('template');

const corretas = new Set();

const totalDePerguntas = perguntas.length;

const mostrarTotal = document.querySelector('#acertos span');

mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`
// Loop/Laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);

    quizItem.querySelector('h3').textContent = item.pergunta;
    
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);

        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', `pergunta-${perguntas.indexOf(item)}`);
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta;
          corretas.delete(item);
          if(estaCorreta) {
            corretas.add(item);
          }
          mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
}