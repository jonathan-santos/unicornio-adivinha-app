export const getEmotionFromPhoto = (photo: string): string => {
  const emotions = [
    'neutral',
    'happiness',
    'sadness',
    'surprise',
    'fear',
    'disgust',
    'contempt',
    'anger'
  ]

  return emotions[Math.floor(Math.random() * emotions.length)]
}

export const getEmotionInPt = (emotionName: string): string => {
  const translations = {
    neutral: 'neutro',
    happiness: 'felicidade',
    sadness: 'tristeza',
    surprise: 'surpresa',
    fear: 'medo',
    disgust: 'desgosto',
    contempt: 'desprezo',
    anger: 'raiva'
  }
  
  return translations[emotionName]
}
