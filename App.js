import React from 'react';
import { Provider as AuthProvider} from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import App from './routes';
import { setNavigator } from './src/navigationRef';

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
            <App ref={ (navigator) => { setNavigator(navigator) }}/>
          </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}