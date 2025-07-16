import { useState } from 'react'
import { Image, View } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

import Button from '../components/button';
import PageContainer from '../components/pageContainer';
import Paragraph from '../components/paragraph';

import styles from './styles'

const Photo = () => {
  const [photo, setPhoto] = useState(null)
  const router = useRouter()

  const handleCameraPress = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync()
      if (!granted) {
        alert('Você não deu permissão do app usar a câmera')
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        base64: true
      })

      if (!result.canceled) {
        setPhoto({
          uri: result.assets[0].uri,
          data: result.assets[0].base64
        })
      }
    } catch (error) {
      alert('Houve algum problema tentando tirar a foto. \nTente novamente ou reclame com o Desenvolvedor')
    }
  }

  const handleGaleryPress = async () => {
    try {
      const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (!granted) {
        alert('Você não deu permissão do app usar a galeria')
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        base64: true
      })
  
      if (!result.canceled) {
        
        setPhoto({
          uri: result.assets[0].uri,
          data: result.assets[0].base64
        })
      }
    } catch (error) {
      alert('Houve algum problema tentando pegar a foto. \nTente novamente ou reclame com o Desenvolvedor')
    }
  }

  const handleNoPress = () => {
    setPhoto(null)
  }

  const handleYesPress = () => {
    router.push({
      pathname: '/result',
      // state: {
      //   photo: photo.data
      // } // TODO: Send state between pages
    })
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
        source={{ uri: photo.uri }}
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
    <PageContainer pageNumber={2}>
      {photo != null
        ? <ConfirmPhoto />
        : <GetPhoto />}
    </PageContainer>
  )
}

export default Photo
