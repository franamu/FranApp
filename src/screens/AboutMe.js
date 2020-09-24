import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import globalStyles from '../globalStyles';
import styles from './styles/AboutMe.styles';
import ProgressCircle from 'react-native-progress-circle';
import BarsIcon from '../components/BarsIcon';

const AboutMe = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={[[styles.photoContainer, globalStyles.secondary]]}>
        <Image source={require('../../assets/fran.jpg')} style={styles.image}/>
        <Text style={[globalStyles.text, styles.textDescription, {marginTop: 5}]}>24 años, Córdoba, Argentina.</Text>
        <Text style={[globalStyles.text, styles.textDescription]}>Front-end Developer y un poquito de Back-end también :)</Text>
      </View>
      <Spacer>
        <View style={styles.container}>
        <View style={styles.containerTitle}><Text style={[styles.title, globalStyles.text]}>Resúmen</Text></View>
          <View style={styles.containerResume}>
            <View style={styles.containerRowResume}>
              <Icon name="project-diagram" size={50} color={globalStyles.textTertiary.color} />
              <Text style={[globalStyles.text, styles.text]}>+15 Proyectos</Text>
            </View>
            <View style={styles.containerRowResume }>
              <Icon name="briefcase" size={50} color={globalStyles.textTertiary.color} />
              <Text style={[globalStyles.text, styles.text]}>2 Trabajos</Text>
            </View>
          </View>
          <View style={styles.containerResume}>
            <View style={styles.containerRowResume}>
              <Icon name="language" size={50} color={globalStyles.textTertiary.color} />
              <Text style={[globalStyles.text, styles.text]}>2 Idiomas</Text>
            </View>
            <View style={styles.containerRowResume }>
              <Icon name="clipboard-check" size={50} color={globalStyles.textTertiary.color} />
              <Text style={[globalStyles.text, styles.text]}>5 años de</Text>
              <Text style={[globalStyles.text]}>Experiencia</Text>
            </View>
          </View>
          <View style={styles.containerTitle}><Text style={[styles.title, globalStyles.text]}>Lenguajes de Programación</Text></View>
          <View style={styles.containerSkills}>
            <View style={styles.containerSkillsRow}>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>Javascript</Text>
                  <ProgressCircle
                    percent={75}
                    radius={50}
                    borderWidth={2}
                    color="rgba(241, 196, 15,1.0)"
                    shadowColor="rgba(189, 195, 199, 0.6)"
                    bgColor={globalStyles.primary.backgroundColor}
                  >
                    <Text style={{ fontSize: 18 }}>{'75%'}</Text>
                  </ProgressCircle>
              </View>
              <View style={styles.containerCircle}>
              <Text style={[globalStyles.text, styles.text]}>PHP</Text>
                <ProgressCircle
                  percent={50}
                  radius={50}
                  borderWidth={2}
                  color="rgba(108, 92, 231,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'50%'}</Text>
                </ProgressCircle>
              </View>
            </View>

            <View style={styles.containerSkillsRow}>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>Node</Text>
                <ProgressCircle
                  percent={50}
                  radius={50}
                  borderWidth={2}
                  color="rgba(46, 204, 113,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'50%'}</Text>
                </ProgressCircle>
              </View>
              <View style={styles.containerCircle}>
              <Text style={[globalStyles.text, styles.text]}>React-Native</Text>
              <ProgressCircle
                  percent={70}
                  radius={50}
                  borderWidth={2}
                  color="rgba(52, 152, 219,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'70%'}</Text>
                </ProgressCircle>
              </View>
            </View>

            <View style={styles.containerSkillsRow}>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>HTML</Text>
                <ProgressCircle
                  percent={90}
                  radius={50}
                  borderWidth={2}
                  color="rgba(231, 76, 60,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'90%'}</Text>
                </ProgressCircle>
              </View>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>CSS</Text>
                <ProgressCircle
                  percent={80}
                  radius={50}
                  borderWidth={2}
                  color="rgba(155, 89, 182,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'80%'}</Text>
                </ProgressCircle>
              </View>
            </View>

            <View style={styles.containerSkillsRow}>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>MONGODB</Text>
                <ProgressCircle
                  percent={20}
                  radius={50}
                  borderWidth={2}
                  color="rgba(39, 174, 96,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'20%'}</Text>
                </ProgressCircle>
              </View>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>MYSQL</Text>
                <ProgressCircle
                  percent={60}
                  radius={50}
                  borderWidth={2}
                  color="rgba(26, 188, 156,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'60%'}</Text>
                </ProgressCircle>
              </View>
            </View>

          </View>
          <View style={styles.containerTitle}><Text style={[styles.title, globalStyles.text]}>Skills Personalidad</Text></View>
          <View style={styles.containerSkills}>
            <View style={styles.containerSkillsRow}>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>Emprendedor</Text>
                <ProgressCircle
                  percent={90}
                  radius={50}
                  borderWidth={2}
                  color="rgba(230, 126, 34,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'90%'}</Text>
                </ProgressCircle>
              </View>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>Divertido</Text>
                <ProgressCircle
                  percent={70}
                  radius={50}
                  borderWidth={2}
                  color="rgba(155, 89, 182,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'70%'}</Text>
                </ProgressCircle>
              </View>
            </View>

            <View style={styles.containerSkillsRow}>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>Honesto</Text>
                <ProgressCircle
                  percent={100}
                  radius={50}
                  borderWidth={2}
                  color="rgba(241, 196, 15,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'100%'}</Text>
                </ProgressCircle>
              </View>
              <View style={styles.containerCircle}>
                <Text style={[globalStyles.text, styles.text]}>Amable</Text>
                <ProgressCircle
                  percent={100}
                  radius={50}
                  borderWidth={2}
                  color="rgba(26, 188, 156,1.0)"
                  shadowColor="rgba(189, 195, 199, 0.6)"
                  bgColor={globalStyles.primary.backgroundColor}
                >
                  <Text style={{ fontSize: 18 }}>{'100%'}</Text>
                </ProgressCircle>
              </View>
            </View>

          </View>
        </View>
      </Spacer>
    </ScrollView>
  )
}

AboutMe.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: ( ) => (
      <BarsIcon navigation={navigation} />
    )
  }
}

export default AboutMe;