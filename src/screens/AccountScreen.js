import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always'}} >
      <Spacer>
        <Button title="Cerrar sesión" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    title: 'Cuenta',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
  }
}

export default AccountScreen;