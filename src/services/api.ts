import axios from 'axios';
import { API_URL, MOCK_API_ENABLED } from '@env';

// Create an axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Enable axios mock adaptor
if (__DEV__ && MOCK_API_ENABLED) {
  require('../../mock/').default(api);
}

// Add request interceptor for modifying requests
api.interceptors.request.use(
  config => {
    // Modify the config object here, such as adding authentication token or other headers
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add response interceptor for handling responses
api.interceptors.response.use(
  response => {
    // Modify the response object here, such as handling success status codes
    return response;
  },
  error => {
    // Handle errors here, such as displaying error messages or redirecting to an error page
    return Promise.reject(error);
  },
);

export default api;
