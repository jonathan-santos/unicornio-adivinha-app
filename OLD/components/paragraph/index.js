import React from 'react'
import { Text } from 'react-native' 

import styles from './style'

const Paragraph = (props) => (
  <Text style={styles.paragraph} {...props}>
    {props.children}
  </Text>
)

export default Paragraph
