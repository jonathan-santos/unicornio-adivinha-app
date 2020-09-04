import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'

import Home from './src/pages/home'

const App = () => {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular })
  
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style='auto' />
        <Home />
      </>
    )
  }
}

export default App
