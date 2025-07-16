import React from 'react'
import { View } from 'react-native'

import Unicorn from '../unicorn'
import Navigation from '../navigation'
import styles from './styles'

const PageContainer = ({ pageNumber = 1, theme = null, children }) => (
	<View style={[styles.container, theme ? { backgroundColor: theme.light } : {}]}>
		<Unicorn invert={pageNumber === 2} color={theme && theme.dark} />

		<Navigation pageSelected={pageNumber} color={theme && theme.dark} />

		<View style={[styles.mainContent, theme ? { backgroundColor: theme.dark } : {}]}>
			{children}
		</View>
	</View>
)

export default PageContainer