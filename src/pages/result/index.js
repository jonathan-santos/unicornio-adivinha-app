import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-native'

import Paragraph from '../../components/paragraph'
import Button from '../../components/button'

const Result = () => {
  const [emotion, setEmotion] = useState('')
  const [quote, setQuote] = useState({})
  const history = useHistory()

  useEffect(() => {
    setEmotion('Neutral')
    setQuote({
      message: 'Never apologize for showing feelings. When you do so, you apologize for the truth.',
      author: 'Benjamin Disraeli'
    })
  }, [])
  
  const handleRestartPress = () => {
    history.push('/photo')
  }

  return (
    <>
      <Paragraph>O sentimento {emotion} foi revelado!</Paragraph>

      <Paragraph>"{quote.message}"</Paragraph>

      <Paragraph>- {quote.author}</Paragraph>

      <Button onPress={handleRestartPress} text='Recomeçar' />
    </>
  )
}

export default Result
