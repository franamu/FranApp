import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Crear cuenta"
        errorMessage={state.errorMessage}
        submitButtonText="Crear cuenta"
        onSubmit={signup}
      />
      <Spacer>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.link}>Ya tengo una cuenta</Text>
          </TouchableOpacity>
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
    marginBottom: 50
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center'
  }
})

export default SignUpScreen;