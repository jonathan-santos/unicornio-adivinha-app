import React from 'react'
import { TouchableHighlight, Text } from 'react-native'

import styles from './styles'

const Button = (props) => (
  <TouchableHighlight style={styles.container} {...props}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableHighlight>
)

export default Button
