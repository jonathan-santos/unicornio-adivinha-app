export const getQuote = () => {
  const quotes = [
    { author: 'Clarice Lispector', message: 'Não se preocupe em entender, viver ultrapassa qualquer entendimento.' },
    { author: 'William Shakespeare', message: 'Ser ou não ser: eis a questão.' },
    { author: 'Friedrich Nietzsche', message: 'O que não provoca minha morte faz com que eu fique mais forte.' },
    { author: 'Fernando Pessoa', message: 'Tudo vale a pena quando a alma não é pequena.' },
    { author: 'Maria Julia Paes de Silva', message: 'O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis.' },
    { author: 'James R. Sherman', message: 'Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.' },
    { author: 'O Pequeno Príncipe', message: 'O essencial é invisível aos olhos.' },
    { author: 'Forrest Gump', message: 'A vida é como uma caixa de chocolates. Você nunca sabe o que vai encontrar.' },
    { author: 'Voltaire', message: 'Com grandes poderes vêm grandes responsabilidades.' },
    { author: 'Vou comprar um cigarro e depois volto', message: 'O pai de alguém, talvez' },
  ]

  console.log(quotes[Math.floor(Math.random() * quotes.length)])

  return quotes[Math.floor(Math.random() * quotes.length)]
}
