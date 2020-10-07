import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import glogalStyles from '../globalStyles';

const SignInScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const signIn = async ({ email, password }) => {
    setLoading(true);
    const resp = await signin({ email, password });
    setLoading(false);
    if (resp.error) {
      return;
    }

    navigation.navigate('App');

  }

  return (
    <View style={[styles.container, glogalStyles.secondary]}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText="Iniciar sesión"
        errorMessage={state.errorMessage}
        submitButtonText="Ingresar"
        onSubmit={signIn}
        loading={loading}
        navigation={navigator}
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
  }
});

export default SignInScreen;