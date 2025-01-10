import axios from 'axios';

// const API_URL = 'http://ec2-99-80-79-116.eu-west-1.compute.amazonaws.com/api/';
const API_URL = process.env.REACT_APP_API_URL

const axiosInstance = axios.create({
  baseURL: API_URL
  // Don't include headers here; they will be set dynamically using an interceptor
});

// Add a request interceptor to set the Authorization header dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with successful responses
    return response;
  },
  (error) => {

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Response Error:', error.response.data);
        console.log('Status:', error.response.status);
        console.log('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Request Error:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
      }
      console.log('Error Config:', error.config);

      if (!navigator.onLine) {
        console.log('You are offline!');
      }
  
    return Promise.reject(error);
  }
);

// Axios utility functions for various HTTP methods
const api = {
  get: (url, config = {}) => axiosInstance.get(url, config),
  post: (url, data = {}, config = {}) => axiosInstance.post(url, data, config),
  put: (url, data = {}, config = {}) => axiosInstance.put(url, data, config),
  delete: (url, config = {}) => axiosInstance.delete(url, config),
  // Add other methods like patch, head, etc. if needed

  // Function for FormData requests
  formData: (url, formData, config = {}) =>
    axiosInstance.post(url, formData, {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'multipart/form-data' // Override content type for FormData
      }
    })
};

export default api;
