import axios from 'axios';

// ngrok http 3000

export default axios.create({
  baseURL: 'http://5abe36bebf4a.ngrok.io'
});