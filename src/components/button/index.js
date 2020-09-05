import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'

const Button = ({ style, icon, onPress, text}) => (
  <TouchableHighlight style={[styles.container, style, icon ? styles.icon : {}]} onPress={onPress}>
    {text
      ? <Text style={styles.text}>{text}</Text>
      : <MaterialCommunityIcons name={icon} size={40} color='white' />}
  </TouchableHighlight>
)

export default Button
