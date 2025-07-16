export const getQuote = () => {
  const quotes = [
    { author: 'Clarice Lispector', message: 'Não se preocupe em entender, viver ultrapassa qualquer entendimento.' },
    { author: 'William Shakespeare', message: 'Ser ou não ser: eis a questão.' },
    { author: 'Friedrich Nietzsche', message: 'O que não provoca minha morte faz com que eu fique mais forte.' },
    { author: 'Fernando Pessoa', message: 'Tudo vale a pena quando a alma não é pequena.' },
    { author: 'James R. Sherman', message: 'Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.' },
    { author: 'Antoine de Saint-Exupéry', message: 'O essencial é invisível aos olhos.' },
    { author: 'Forrest Gump', message: 'A vida é como uma caixa de chocolates. Você nunca sabe o que vai encontrar.' },
    { author: 'Voltaire', message: 'Com grandes poderes vêm grandes responsabilidades.' },
    { author: 'O pai de alguém, talvez', message: 'Vou comprar um cigarro e depois volto' },
  ]

  return quotes[Math.floor(Math.random() * quotes.length)]
}
