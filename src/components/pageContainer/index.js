import React from 'react'
import { View } from 'react-native'

import Unicorn from '../unicorn'
import Navigation from '../navigation'
import styles from './style'

const PageContainer = ({ pageNumber, children }) => (
  <View style={styles.container}>
			<Unicorn />

			<Navigation selected={pageNumber} />

			<View style={styles.mainContent}>
				{children}
			</View>
		</View>
)

export const TextStyle = styles.text
export default PageContainer