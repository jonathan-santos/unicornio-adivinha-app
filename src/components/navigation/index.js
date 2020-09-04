import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Navigation = ({ selected }) => {
  const getIndicatorStyle = (number) => (
    [ styles.indicator, selected === number ? styles.selected : {} ]
  )

  return (
    <View style={styles.container}>
      <View style={styles.horizontalLine}></View>

      <Text style={getIndicatorStyle(1)}>1</Text>

      <Text style={getIndicatorStyle(2)}>2</Text>

      <Text style={getIndicatorStyle(3)}>3</Text>
    </View>
  )
}

export default Navigation
