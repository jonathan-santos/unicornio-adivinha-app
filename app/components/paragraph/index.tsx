import React from 'react'
import { Text } from 'react-native' 

import styles from './styles'

const Paragraph = (props) => (
  <Text style={styles.paragraph} {...props}>
    {props.children}
  </Text>
)

export default Paragraph
