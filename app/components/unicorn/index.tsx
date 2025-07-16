import React from 'react'
import { View, Image } from 'react-native'

// import UnicornImg from '../../assets/unicorn.png'
import styles from './styles'

const Unicorn = ({ invert, color }) => (
  <View style={[styles.container, color ? { backgroundColor: color } : {}]}>
    <Image
      style={[ styles.image, invert ? styles.invert : {} ]}
      // source={UnicornImg}
    />
  </View>
)

export default Unicorn
