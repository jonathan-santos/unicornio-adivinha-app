import React from 'react'
import { TouchableHighlight, Text } from 'react-native'

import styles from './style'

const Button = ({ text }) => (
  <TouchableHighlight style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
)

export default Button
