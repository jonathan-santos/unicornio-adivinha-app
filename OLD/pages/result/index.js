import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-native'

import { getEmotionFromPhoto, getEmotionInPt } from '../../repositories/emotion'
import { getQuote } from '../../repositories/quotes'
import { getTheme } from '../../repositories/theme'

import PageContainer from '../../components/pageContainer'
import Paragraph from '../../components/paragraph'
import Button from '../../components/button'
import Loading from '../../components/loading'

const Result = ({ location }) => {
  const [emotion, setEmotion] = useState('')
  const [quote, setQuote] = useState({})
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const { photo } = location.state
      const results = await Promise.all([
        getEmotionFromPhoto(photo),
        getQuote()
      ])
  
      setEmotion(results[0].name)
      setQuote(results[1])
    }

    fetchData()
  }, [])
  
  const handleRestartPress = () => {
    history.push('/photo')
  }

  return (
    <PageContainer pageNumber={3} theme={getTheme(emotion)}>
      {emotion
        ? <>
            <Paragraph>O sentimento {getEmotionInPt(emotion)} foi revelado!</Paragraph>

            <Paragraph>"{quote.message}"</Paragraph>

            <Paragraph>- {quote.author}</Paragraph>

            <Button onPress={handleRestartPress} text='Recomeçar' />
          </>
        : <Loading />}
    </PageContainer>
  )
}

export default Result
