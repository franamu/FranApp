import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const LogoutScreen = () => {
  const { signout } = useContext(AuthContext);

  useEffect(() => {
    signout();
  })

  return null;
};


export default LogoutScreen;