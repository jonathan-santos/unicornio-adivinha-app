import React from 'react'
import { View } from 'react-native'

import Unicorn from '../unicorn'
import Navigation from '../navigation'
import styles from './style'

const PageContainer = ({ pageNumber, children }) => (
	<View style={styles.container}>
		<Unicorn invert={pageNumber === 2} />

		<Navigation selected={pageNumber} />

		<View style={styles.mainContent}>
			{children}
		</View>
	</View>
)

export default PageContainer