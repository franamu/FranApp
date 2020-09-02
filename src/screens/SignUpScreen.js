import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignUpScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Crear cuenta"
        errorMessage={state.errorMessage}
        submitButtonText="Crear cuenta"
        onSubmit={signup}
      />
      <NavLink routeName="SignIn" text="Ya tienes una cuenta? Ingresa desde acá" />
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
  }
})

export default SignUpScreen;