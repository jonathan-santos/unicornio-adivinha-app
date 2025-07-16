import { useState, useEffect } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'

// import { getEmotionFromPhoto, getEmotionInPt } from '../../repositories/emotion'
// import { getQuote } from '../../repositories/quotes'
import { getTheme } from '../../repositories/themes'

import PageContainer from './../components/pageContainer'
import Paragraph from './../components/paragraph'
import Button from './../components/button'
import Loading from './../components/loading'

const Result = () => {
  const router = useRouter()
  const { photo } = useLocalSearchParams();

  const [emotion, setEmotion] = useState('')
  const [quote, setQuote]: any = useState({})

  const getEmotionFromPhoto = (photo) => "neutro"
  const getEmotionInPt = (emotion) => "Neutro"
  const getQuote = () => {}

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all([
        getEmotionFromPhoto(photo),
        getQuote()
      ])
  
      setEmotion(results[0])
      setQuote(results[1])
    }

    // fetchData()

    setTimeout(() => {
      setEmotion('neutral')
      setQuote({ author: "Hello", message: "There" })
    }, 3000)
  }, [photo])
  
  const handleRestartPress = () => {
    router.push('/photo')
  }

  if (!emotion) {
    return (
      <PageContainer pageNumber={3}>
        <Loading />
      </PageContainer>
    )
  }

  return (
    <PageContainer pageNumber={3} theme={getTheme(emotion)}>
      <Paragraph>O sentimento {getEmotionInPt(emotion)} foi revelado!</Paragraph>

      <Paragraph>&quot;{quote.message}&quot;</Paragraph>

      <Paragraph>- {quote.author}</Paragraph>

      <Button onPress={handleRestartPress} text='Recomeçar' />
    </PageContainer>
  )
}

export default Result
