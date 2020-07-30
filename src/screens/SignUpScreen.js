import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Spacer>
          <Text h3>Crear cuenta</Text>
          <Input label="Email" />
          <Input label="Contraseña" />
          <Button title="Crear cuenta" />
      </Spacer>
    </View>
  );
}

SignUpScreen.navigationOptions = () => {
  return {
    header: () => false
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
})

export default SignUpScreen;