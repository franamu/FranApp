import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResume: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  containerRowResume: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10
  },
  photoContainer: {
    alignItems: 'center',
    height: 200,
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
    marginTop: 40
  },
  containerSkills: {
    marginTop: 20,
  },
  containerSkillsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerCircle: {
    alignItems: 'center'
  }
});