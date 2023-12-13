import axios from "axios";
import api from "./api";

const BASE_URL = "http://localhost:5000/api";

const register = (credentials: { userName: string, email: string, password: string }) => {
  return axios.post(`${BASE_URL}/users/register`, credentials);
}

const signin = (credentials: { email: string, password: string }) => {
  return axios.post(`${BASE_URL}/users/signin`, credentials);
}

const signout = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
}

const getCurrentUser = () => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user");
  return { token, userId };
}

const getUserProfile = async () => {

  const { token, userId } = getCurrentUser();

  const response = await api.get(`/users/${userId}`)

  return response.data;
}

const AuthService = {
  register, 
  signin,
  signout,
  getCurrentUser,
  getUserProfile
};

export default AuthService;
