import createDataContext from './createDataContext';
import http from '../api/axios-config';
import AsyncStorage from '@react-native-community/async-storage';

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

const tryLocalSignIn = dispatch => async (navigate) => {
  const token = await AsyncStorage.getItem('token');

  if (token ) {
    dispatch({ type: 'signin', payload: token });
    navigate('App');
  } else {
    navigate('SignIn');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
}

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await http.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      return {
        error: false,
        data: response.data
      }
    } catch (error) {
      dispatch({ type: 'add_error', payload: 'Algo fue mal al crear la cuenta' });
      return {
        error: true,
        data: error.response || error
      }
    }
  };
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await http.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    return {
      error: false,
      data: response.data
    }
  } catch (error) {
    console.log('error', error);
    dispatch({ type: 'add_error', payload: 'Algo fue mal con el logeo' });
    return {
      error: true,
      data: error.response || error
    }
  }
};

const signout = dispatch => async (navigate) => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout', payload: null });
  navigate('SignIn');
};

export const { Provider, Context} = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: '' }
)