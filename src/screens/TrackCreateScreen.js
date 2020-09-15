import React, {useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback(location => {
    console.log('el callback', location);
    addLocation(location, recording);
  }, [recording]);
  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3> Crear tramo</Text>
      <Map />
      { error ? <Text>Necesitamos permisos de gps</Text> : null }
      <TrackForm />
    </SafeAreaView>
  );
}

TrackCreateScreen.navigationOptions = () => {
  return {
    title: 'Agregar Tramo',
    tabBarIcon: <FontAwesome name="plus" size={20} />
  }
}
const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);