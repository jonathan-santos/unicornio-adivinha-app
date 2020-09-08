export const getQuote = async () => {
  const res = await fetch('https://allugofrases.herokuapp.com/frases/random')
  const quote = await res.json()
  return {
    message: quote.frase,
    author: quote.autor
  }
}
