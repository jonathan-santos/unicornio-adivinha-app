import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: 300,
    resizeMode: 'center'
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  noButton: {
    backgroundColor: '#F53656'
  }
})

export default styles