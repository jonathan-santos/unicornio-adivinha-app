import React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'

import UnicornImg from '../../assets/unicorn.png'
import styles from './styles'

const Home = () => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Image style={styles.icon} source={UnicornImg} />
			</View>

			<View style={styles.navigationContainer}>
				<View style={styles.navigationHorizontalLine}></View>
				<Text style={{ ...styles.navigationIndicator, ...styles.navigationIndicatorSelected }}>1</Text>
				<Text style={styles.navigationIndicator}>2</Text>
				<Text style={styles.navigationIndicator}>3</Text>
			</View>

			<View style={styles.main}>
				<Text style={styles.text}>Envie uma foto e nossos unicórnions (mix de unicórnio com minions) vão revelar o sentimento da pessoa na foto</Text>
				<Text style={styles.text}>Vamos revelar o humor de uma pessoa utilizando apenas uma foto!</Text>
				<TouchableHighlight style={styles.button}>
					<Text style={styles.buttonText}>Começar</Text>
				</TouchableHighlight>
			</View>
		</View>
	)
}

export default Home
