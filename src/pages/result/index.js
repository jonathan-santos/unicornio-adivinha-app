import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-native'

import { getEmotionFromPhoto } from '../../repositories/emotion'
import { getTheme } from '../../repositories/theme'

import PageContainer from '../../components/pageContainer'
import Paragraph from '../../components/paragraph'
import Button from '../../components/button'
import Loading from '../../components/loading'

const Result = ({ location }) => {
  const [emotion, setEmotion] = useState('')
  const [quote, setQuote] = useState({})
  const history = useHistory()

  const getData = async () => {
    const { photo } = location.state
    const detectedEmotion = await getEmotionFromPhoto(photo)

    setEmotion(detectedEmotion.name)

    setQuote({
      message: 'Never apologize for showing feelings. When you do so, you apologize for the truth.',
      author: 'Benjamin Disraeli'
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
  const handleRestartPress = () => {
    history.push('/photo')
  }

  return (
    <PageContainer pageNumber={3} theme={getTheme(emotion)}>
      {emotion
        ? <>
            <Paragraph>O sentimento {emotion} foi revelado!</Paragraph>

            <Paragraph>"{quote.message}"</Paragraph>

            <Paragraph>- {quote.author}</Paragraph>

            <Button onPress={handleRestartPress} text='Recomeçar' />
          </>
        : <Loading />}
    </PageContainer>
  )
}

export default Result
