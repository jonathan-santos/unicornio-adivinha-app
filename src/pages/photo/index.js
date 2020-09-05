import React from 'react'
import { View } from 'react-native'

import Paragraph from '../../components/paragraph'
import Button from '../../components/button'

const Photo = () => {
  const handleCameraPress = () => {
    alert('camera')
  }

  const handleGaleryPress = () => {
    alert('galery')
  }
  
  return (
    <View>
      <Paragraph>Tirar foto</Paragraph>

      <Button
        icon='camera'
        style={{ marginBottom: 24 }}
        onPress={handleCameraPress}
      />

      <Paragraph>Pegar da galeria</Paragraph>

      <Button
        icon='image'
        onPress={handleGaleryPress}
      />
    </View>
  )
}

export default Photo
