import createDataContext from './createDataContext';
import http from '../api/axios-config';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await http.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data});
};
const createTrack = dispatch => async (name, locations) => {
  http.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
)
