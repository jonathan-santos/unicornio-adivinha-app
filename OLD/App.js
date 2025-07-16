import React from 'react';
import { AppRegistry } from 'react-native'
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'

import Routes from './src/routes'

const App = () => {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular })
  
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='auto' />
      <Routes />
    </>
  )
}

AppRegistry.registerComponent('UnicornioAdivinha', () => App)
export default App
