import createDataContext from './createDataContext';
import http from '../api/axios-config';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({email, password}) => {
    try {
      const response = await http.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });

      navigate('TrackList');
    } catch (error) {
      dispatch({ type: 'add_error', payload: 'Algo fue mal al crear la cuenta' });
    }
    // if we sign up, modify our state

    // if fails, reflect an error message
  };
};

const signin = (dispatch) => {
  return ({email, password}) => {

  };
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout},
  { token: null, errorMessage: '' }
)