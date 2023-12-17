import axios from "axios";
import api from "./api";
import { removeCredentials, getCredentials } from "../utils/CredentialHelpers";

const register = (credentials: { userName: string, email: string, password: string }) => {
  return api.post(`/users/register`, credentials);
}

const signin = (credentials: { email: string, password: string }) => {
  return api.post(`/users/signin`, credentials);
}

const signout = () => {
  removeCredentials();
}

const getCurrentUser = () => {
  return getCredentials();
}

const getUserProfile = async () => {

  const { token, userId } = getCredentials();

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
