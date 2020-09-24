import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles/StatusScreen.styles';
import globalStyles from '../globalStyles';
import BarsIcon from '../components/BarsIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StatusScreen = ({ navigation }) => {

  const navigateTo = (path, params) => {
    navigation.navigate(path, params);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.containerRow, styles.containerSuccess]}
        onPress={() => navigateTo('Status', {
          config: {
            status: 'success',
            message: 'Wohoo! somos increíbles!'
          }
        })}
      >
        <Text style={styles.text}>Presioname</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerRow, styles.containerError]}
        onPress={() => navigateTo('Status', {
          config: {
            status: 'error',
            message: 'Emmm ok algo fue mal :('
          }
        })}
      >
        <Text style={styles.text}>Presioname</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerRow, styles.containerWarning]}
        onPress={() => navigateTo('Status', {
          config: {
            status: 'warning',
            message: 'Cuidado, algo no esta saliendo bien...'
          }
        })}
      >
        <Text style={styles.text}>Presioname</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerRow, styles.containerInfo]}
        onPress={() => navigateTo('Status', {
          config: {
            status: 'info',
            message: 'Te queremos informar que hoy se toman unas birras bien frías'
          }
        })}
      >
        <Text style={styles.text}>Presioname</Text>
      </TouchableOpacity>

    </View>
  );
};

StatusScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: ( ) => (
      <BarsIcon navigation={navigation} />
    )
  }
}


export default StatusScreen;