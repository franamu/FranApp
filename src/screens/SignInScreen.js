import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Iniciar sesión"
        errorMessage=''
        submitButtonText="Ingresar"
        onSubmit={() => {}}
      />
      <NavLink routeName="SignUp" text="No tienes una cuenta? Crea una desde acá" />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: () => false
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50
  }
});

export default SignInScreen;