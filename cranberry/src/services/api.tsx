import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Request interceptor, so every API call automatically appends 
// our header with the bearer token:
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// TODO : Add interceptor for Refresh Token

export default api;