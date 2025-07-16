import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import styles from './style'

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator
      style={styles.loading}
      size='large'
      color='#00C9A8'
    />

    <Text style={styles.text}>Analisando a foto...</Text>
  </View>
)

export default Loading
