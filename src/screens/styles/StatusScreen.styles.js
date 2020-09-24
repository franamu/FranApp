import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerRow: {
    width: '100%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSuccess: {
    backgroundColor: '#2ecc71'
  },
  containerError: {
    backgroundColor: '#e74c3c'
  },
  containerWarning: {
    backgroundColor: '#f1c40f'
  },
  containerInfo: {
    backgroundColor: '#3498db'
  },
  text: {
    color : '#ffffff'
  }
});