import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const LogoutScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  useEffect(() => {
    signout(navigation.navigate);
  })

  return null;
};


export default LogoutScreen;