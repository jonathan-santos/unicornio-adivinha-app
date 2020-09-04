import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

import styles from './styles'

const Navigation = ({ selected }) => {
  const getIndicatorStyle = (number) => (
    [ styles.indicator, selected === number ? styles.selected : {} ]
  )

  return (
    <View style={styles.container}>
      <View style={styles.horizontalLine}></View>

      <Link to='/'>
        <Text style={getIndicatorStyle(1)}>1</Text>
      </Link>

      <Link to='/photo'>
        <Text style={getIndicatorStyle(2)}>2</Text>
      </Link>

      <Text style={getIndicatorStyle(3)}>3</Text>
    </View>
  )
}

export default Navigation
