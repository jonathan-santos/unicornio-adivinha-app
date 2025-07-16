import React from 'react'
import { Pressable, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'

const Button = ({ style = null, icon = null, onPress = null, text = "" }) => {
  const buttonStyles = [
    styles.container,
    style,
    icon ? styles.icon : {}
  ]

  const androidRipple = {
    color: '#FFF',
    borderless: false,
    radius: icon ? 100 : 16
  }

  return (
    <Pressable style={buttonStyles}
    onPress={onPress}
    android_ripple={androidRipple}>
      {text
        ? <Text style={styles.text}>{text}</Text>
        : <MaterialCommunityIcons name={icon} size={40} color='white' />}
  </Pressable>
  )
}

export default Button
