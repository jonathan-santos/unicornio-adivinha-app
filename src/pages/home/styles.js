import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#4C3470'
  },
  iconContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#331E54'
  },
  icon: {
    width: 100,
    marginLeft: 16,
    resizeMode: 'center'
  },
  navigationContainer: {
    width: '90%',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navigationHorizontalLine: {
    height: 4,
    width: '100%',
    position: 'absolute',
    top: '50%',
    backgroundColor: '#331E54'
  },
  navigationIndicator: {
    height: 64,
    width: 64,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#331E54',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
    fontFamily: 'Montserrat_400Regular'
  },
  navigationIndicatorSelected: {
    backgroundColor: '#00C9A8'
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
