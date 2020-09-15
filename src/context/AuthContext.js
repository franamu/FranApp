import createDataContext from './createDataContext';
import http from '../api/axios-config';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
      case 'signuot':
        return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token ) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('SignIn');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
}

const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await http.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      navigate('TrackList');
    } catch (error) {
      dispatch({ type: 'add_error', payload: 'Algo fue mal al crear la cuenta' });
    }
  };
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await http.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (error) {
    console.log('error', error);
    dispatch({ type: 'add_error', payload: 'Algo fue mal con el logeo' })
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout', payload: null });
  navigate('SignIn');
};

export const { Provider, Context} = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: '' }
)