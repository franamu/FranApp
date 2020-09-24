import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResume: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerAllResume: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  containerSkillsBlank: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  containerRowResume: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    marginBottom: 10
  },
  photoContainer: {
    alignItems: 'center',
    height: 250,
    justifyContent: 'center'
  },  
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  textDescription: {
    fontSize: 12,
    color: 'white'
  },
  containerTitle: {
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  containerSkills: {
  },
  containerSkillsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerCircle: {
    alignItems: 'center'
  },
  buttons: {
    width: '100%'
  }
});