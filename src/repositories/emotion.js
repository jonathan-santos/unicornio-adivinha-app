import { Buffer } from 'buffer'

const endpoint = 'https://unicornioadivinha.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01'
const key = '55bc470da3cf4dd9b4300132fe76ec60'

export const getEmotionFromPhoto = async (photo) => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': key
    },
    body: new Buffer(photo, 'base64')
  })

  const [face] = await res.json()

  if (face) {
    const emotions = face.faceAttributes.emotion
    let highestEmotion = { value: 0 }
    
    for (const emotion in emotions) {
      if (emotions[emotion] > highestEmotion.value) {
        highestEmotion = {
          name: emotion,
          value: emotions[emotion]
        }
      }
    }
    
    return highestEmotion
  }
}

export const getEmotionInPt = (emotionName) => {
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
