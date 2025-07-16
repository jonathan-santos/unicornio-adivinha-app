import React from 'react'
import { View } from 'react-native'
import { useRouter } from 'expo-router';

import Button from '../button'

import styles from './styles'

const Navigation = ({ pageSelected, color }) => {
  const { push } = useRouter()
  
  const getIndicatorStyle = (number) => (
    [
      styles.indicator,
      color ? { backgroundColor: color } : {},
      pageSelected === number ? styles.selected : {}
    ]
  )

  const handleNavigationItemPress = page => {
    push(page)
  }


  return (
    <View style={styles.container}>
      <View style={[styles.horizontalLine, color ? { backgroundColor: color } : {}]}></View>

      <Button
        style={getIndicatorStyle(1)}
        text={1}
        onPress={() => handleNavigationItemPress('/')}
      />

      <Button
        style={getIndicatorStyle(2)}
        text={2}
        onPress={() => handleNavigationItemPress('/photo')}
      />

      <Button
        style={getIndicatorStyle(3)}
        text={3}
      />
    </View>
  )
}

export default Navigation
