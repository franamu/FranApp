import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import glogalStyles from '../globalStyles';

const SignUpScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const signUp = async ({ email, password }) => {
    setLoading(true);
    await signup({ email, password });
    setLoading(false);
  }

  return (
    <View style={[styles.container, glogalStyles.secondary]}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText="Crear cuenta"
        errorMessage={state.errorMessage}
        submitButtonText="Crear cuenta"
        onSubmit={signUp}
        loading={loading}
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
  }
})

export default SignUpScreen;