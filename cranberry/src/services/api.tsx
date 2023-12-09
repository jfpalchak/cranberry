import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

// Request interceptor, so every API call automatically appends 
// our header with the bearer token:
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;