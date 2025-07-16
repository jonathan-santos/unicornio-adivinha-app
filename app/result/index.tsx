import { useState, useEffect } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'

import { getEmotionFromPhoto, getEmotionInPt } from '../../repositories/emotions'
import { getQuote } from '../../repositories/quotes'
import { getTheme } from '../../repositories/themes'

import PageContainer from './../components/pageContainer'
import Paragraph from './../components/paragraph'
import Button from './../components/button'
import Loading from './../components/loading'

const Result = () => {
  console.log(getQuote())
  
  const router = useRouter()
  const { photo } = useLocalSearchParams();

  const [emotion, setEmotion] = useState('')
  const [quote, setQuote]: any = useState({})

  useEffect(() => {
    setTimeout(() => {
      setEmotion(getEmotionFromPhoto(photo))
      setQuote(getQuote())
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
