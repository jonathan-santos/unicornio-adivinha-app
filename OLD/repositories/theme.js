const themes = {
  neutral: {
    light: '#90a4ae',
    dark: '#62757f'
  },
  happiness: {
    light: '#ffff00',
    dark: '#c7cc00'
  },
  sadness: {
    light: '#5c6bc0',
    dark: '#26418f'
  },
  surprise: {
    light: '#e040fb',
    dark: '#aa00c7'
  },
  fear: {
    light: '#d500f9',
    dark: '#9e00c5'
  },
  disgust: {
    light: '#00c853',
    dark: '#009624'
  },
  contempt: {
    light: '#ff9100',
    dark: '#c56200'
  },
  anger: {
    light: '#ff1744',
    dark: '#c4001d'
  },
}

export const getTheme = (emotion) => {
  return themes[emotion]
}
