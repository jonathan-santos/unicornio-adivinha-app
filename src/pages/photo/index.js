import React, { useState } from 'react'
import { Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import Paragraph from '../../components/paragraph'
import Button from '../../components/button'
import styles from './style'

const Photo = () => {
  const [photo, setPhoto] = useState('')

  const handleCameraPress = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync()
      if (!granted) {
        alert('Você não deu permissão do app usar a câmera')
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false
      })

      if (!result.cancelled) {
        setPhoto(result.uri)
      }
    } catch (error) {
      alert('Houve algum problema tentando tirar a foto. \nTente novamente ou reclame com o Desenvolvedor')
    }
  }

  const handleGaleryPress = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
      if (!granted) {
        alert('Você não deu permissão do app usar a galeria')
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
      })
  
      if (!result.cancelled) {
        setPhoto(result.uri)
      }
    } catch (error) {
      alert('Houve algum problema tentando pegar a foto. \nTente novamente ou reclame com o Desenvolvedor')
    }
  }

  const handleNoPress = () => {
    setPhoto('')
  }

  const handleYesPress = () => {
    alert('YES!')
  }

  const GetPhoto = () => (
    <>
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
    </>
  )

  const ConfirmPhoto = () => (
    <>
      <Image
        style={styles.photo}
        source={{ uri: photo }}
      />

      <View style={styles.buttonsContainer}>
        <Button
          style={styles.noButton}
          onPress={handleNoPress}
          text='Não'
        />

        <Button
          onPress={handleYesPress}
          text='Sim'
        />
      </View>
    </>
  )

  return (
    <>
      {photo
        ? <ConfirmPhoto />
        : <GetPhoto />}
    </>
  )
}

export default Photo
