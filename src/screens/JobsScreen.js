import React from 'react';
import { View, ScrollView, Text, Image, Linking } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import BarsIcon from '../components/BarsIcon';
import Spacer from '../components/Spacer';
import globalStyles from '../globalStyles';
import styles from './styles/Jobs.styles';

const JobsScreen = () => {
  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  return (
    <ScrollView style={styles.container}>
      <Spacer>
        <View>
          <View style={styles.containerHeader}>
            <Text style={[globalStyles.text, styles.title]}>Trabajos</Text>
          </View>

          <View style={styles.conainerJobs}>
            <View style={styles.containerImage}>
              <Image source={require('../../assets/silstech.jpg')} style={styles.image} />
            </View>
            <Text>Silstech</Text>
            <Text style={styles.text}>
              Comencé en Silstech a principios del 2020 sumándome al equipo de desarrollo Sils, plataforma de logística y seguirdad: http://sils.com.ar/#/login.
              Unos meses más tarde empezamos a dessarrollar una App desde su inicio y pasé a ser uno de los líderes del equipo.
            </Text>
            <Text>Las tecnologías que usamos fueron principalmente React Native y Node con base de datos Mysql.</Text>
            <Text>Podés ver las apps desarrolladas en Google Play:</Text>
            <TouchableOpacity onPress={() => openURL('https://play.google.com/store/apps/details?id=ar.com.sils.axion')}>
              <Text style={styles.link}>Sils App Axion</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openURL('https://play.google.com/store/apps/details?id=ar.com.sils.ypf')}>
              <Text style={styles.link}>Sils App YPF</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.conainerJobs}>
            <View style={styles.containerImage}>
              <Image source={require('../../assets/globantDisney.jpg')} style={styles.image} />
            </View>
            <Text>Globant</Text>
            <Text style={styles.text}>
              Trabajé en Globant desde el 2018 hasta principios del 2020 desarrollando en la plataforma web de Disney. Formé parte de dos equipos, Jedi y Rey. En Jedi nos ocupabamos de arreglar bugs relacionados a 
              validaciones y en Rey, en donde más tiempo pase, nos ocupabamos del flow de Annual Passes tanto en https://disneyworld.disney.go.com/
              como en https://disneyland.disney.go.com/.
            </Text>
          </View>

        <View style={styles.containerHeader}>
          <Text style={[globalStyles.text, styles.titleProyect]}>Proyectos</Text>
        </View>
        <View style={styles.conainerJobs}>
          <Text>App para mostrar mis trabajos en React Native.</Text>
          <Text>Servidor en Express deployados en Heroku, uno de esos se usa para esta App.</Text>
          <Text>Proyectos aislados en React Native</Text>
          <Text>Api rest café, manejo de servicios rest.</Text>
          <Text>Chat en tiempo real</Text>
          <Text>Nutrega: Sistema de comercio electrónico realizado en PHP, Javascript, HTML, CSS con base de datos MySQL.</Text>
          <Text>El placer de jugar: Web desarrollada para una ONG con tecnologías similares</Text>
          <Text>Te invito a que mires mis trabajos en Github</Text>
          <TouchableOpacity onPress={() => openURL('https://github.com/franamu')}>
            <Text style={styles.link}>https://github.com/franamu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerBye}>
          <View style={styles.containerHeader}>
            <Text style={[globalStyles.text, styles.titleProyect]}>¡Gracias!</Text>
          </View>
          <Text>Gracias por haber descargado la app y haberte interesado en mis trabajos. No perdamos el contacto, agregame en Linkedin.</Text>
          <TouchableOpacity onPress={() => openURL('https://www.linkedin.com/in/francisco-amuch%C3%A1stegui-44900197/')}>
            <Text style={styles.link}>Francisco Amuchástegui</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Spacer>
    </ScrollView>
  )
}

JobsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: ( ) => (
      <BarsIcon navigation={navigation} />
    )
  }
}

export default JobsScreen;