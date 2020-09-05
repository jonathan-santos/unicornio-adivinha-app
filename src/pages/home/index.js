import React from 'react'
import { Text } from 'react-native'
import { useHistory } from 'react-router-native'

import { TextStyle } from '../../components/pageContainer'
import Button from '../../components/button'

const Home = () => {
	const history = useHistory()

	const handleComecarPress = () => {
		history.push('/photo')	
	}

	return (
		<>
			<Text style={TextStyle}>Envie uma foto e nossos unicórnions (mix de unicórnio com minions) vão revelar o sentimento da pessoa na foto</Text>

			<Text style={TextStyle}>Vamos revelar o humor de uma pessoa utilizando apenas uma foto!</Text>

			<Button
				text='Começar'
				onPress={handleComecarPress}
			/>
		</>
	)
}

export default Home
