import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  camera: {
    width: width,
    height: height,
    flex: 1
  },
  overlay: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'rgba(255, 243, 93,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gesture: { flex: 1, backgroundColor: '#fff' },

  /* ------------------------------- */
  paw: {
    alignSelf: 'center',
    marginTop: height / 1.5
  }
  /* ------------------------------- */
});
