import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#4C3470'
  },
  main: {
    borderRadius: 16,
    padding: 20,
    backgroundColor: '#331E54'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'sans-serif',
    marginBottom: 24,
    fontFamily: 'Montserrat_400Regular'
  },
  button: {
    borderRadius: 16,
    padding: 16,
    alignSelf: 'center',
    backgroundColor: '#00C9A8',
    color: '#FFFFFF'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'sans-serif',
    fontFamily: 'Montserrat_400Regular'
  }
})

export default styles
