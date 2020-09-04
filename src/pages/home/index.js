import React from 'react'
import { View, Text } from 'react-native'

import Unicorn from '../../components/unicorn'
import Navigation from '../../components/navigation'
import Button from '../../components/button'
import styles from './styles'

const Home = () => {
	return (
		<View style={styles.container}>
			<Unicorn />

			<Navigation selected={1} />

			<View style={styles.main}>
				<Text style={styles.text}>Envie uma foto e nossos unicórnions (mix de unicórnio com minions) vão revelar o sentimento da pessoa na foto</Text>

				<Text style={styles.text}>Vamos revelar o humor de uma pessoa utilizando apenas uma foto!</Text>

				<Button text='Começar' />
			</View>
		</View>
	)
}

export default Home
