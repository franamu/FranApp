import React from 'react';
import StatusView from '../views/StatusView';

const Status = ({ navigation }) => {
  const getNavigationParams = () => {
		return navigation.state.params || {};
  };
  
  const { config } = getNavigationParams();

  const navigateTo = path => {
    navigation.navigate(path);
  };

  // success, error, info, warning
  const status = config.status || 'info';
  const message = config.message || 'Se viene algo genial, estás preparado para empezar a pagar menos?';
  const description = config.description || '';
  const buttonText = config.buttonText || 'Aceptar';
  return <StatusView status={status} message={message} description={description} buttonText={buttonText} path="StatusScreen" navigateTo={navigateTo} />
}

Status.navigationOptions = {
  headerStyle: {
    backgroundColor: 'transparent'
  },
  headerTintColor: 'white',
  headerTransparent: true
}

export default Status;
