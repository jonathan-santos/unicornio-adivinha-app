import React from 'react'
import { useHistory } from 'react-router-native'

import PageContainer from '../../components/pageContainer'
import Paragraph from '../../components/paragraph'
import Button from '../../components/button'

const Home = () => {
	const { push } = useHistory()

	const handleStartPress = () => {
		push('/photo')	
	}

	return (
		<PageContainer pageNumber={1}>
			<Paragraph>Envie uma foto e nossos unicórnions (mix de unicórnio com minions) vão revelar o sentimento da pessoa na foto</Paragraph>

			<Paragraph>Vamos revelar o humor de uma pessoa utilizando apenas uma foto!</Paragraph>

			<Button
				text='Começar'
				onPress={handleStartPress}
			/>
		</PageContainer>
	)
}

export default Home
