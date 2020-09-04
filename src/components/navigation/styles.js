import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  horizontalLine: {
    height: 4,
    width: '100%',
    position: 'absolute',
    top: '50%',
    backgroundColor: '#331E54'
  },
  indicator: {
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
  selected: {
    backgroundColor: '#00C9A8'
  }
})

export default styles
