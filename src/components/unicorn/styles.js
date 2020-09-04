import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#331E54'
  },
  image: {
    width: 100,
    marginLeft: 16,
    resizeMode: 'center'
  },
  invert: {
    marginLeft: 0,
    marginRight: 16,
    transform: [{
      rotateY: '180deg'
    }]
  }
})

export default styles
