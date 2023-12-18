import api from "./api";
import { removeCredentials, getCredentials } from "../utils/credentials-helper";
import type { IRegistrationData } from "../types";

const register = (userRegistration: IRegistrationData) => {
  return api.post(`/users/register`, userRegistration);
}

const signin = (credentials: { email: string, password: string }) => {
  return api.post(`/users/signin`, credentials);
}

const signout = () => {
  removeCredentials();
}

const getUserProfile = async () => {
  const { userId } = getCredentials();

  const response = await api.get(`/users/${userId}`)

  return response.data;
}

const AuthService = {
  register, 
  signin,
  signout,
  getUserProfile
};

export default AuthService;
