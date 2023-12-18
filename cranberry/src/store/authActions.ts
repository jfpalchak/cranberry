import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCredentials, removeCredentials, setCredentials } from "../utils/credentials-helper";
import AuthService from "../services/auth.service";
import { setError } from "./authSlice";
import { IUser } from "../types";

interface IUserCredentials {
  userName: string;
  email: string;
  password: string;
}

export interface IAuthentication {
  token: string;
  userId: string;
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userRegistration: IUserCredentials, thunkAPI) => {
    try {
      const response = await AuthService.register(userRegistration);
      console.log("Register success: ", response)
      return response.data;
    }
    catch(error: any) {
      const message = error.response.data.message 
        || error.response.data[0]?.description
        || error.response.data.errors.Email
        || error.response.data.errors.Password
        || error.response.data.errors.UserName
      
      console.log("Register error: ", error)

      thunkAPI.dispatch(setError(message))
      return thunkAPI.rejectWithValue(message as string );
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/login',
  async (userCredentials: Omit<IUserCredentials, "userName">, thunkAPI ) => {
    try {
      const response = await AuthService.signin(userCredentials);
      const { token, userId } = response.data;
      
      setCredentials(token, userId);
      console.log( "Sign in response: ", response)

      return response.data;
    }
    catch (error: any) {
      let message = error.response.data.message 
      || error.response.data[0]?.description
      || error.response.data.errors.Email
      || error.response.data.errors.Password
      message = message.includes("Unable") 
        ? message.concat(" Please make sure your email or password is correct.")
        : message.concat("");
      thunkAPI.dispatch(setError(message))
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signout',
  async () => {
    AuthService.signout();
  }
);

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const { data } = await AuthService.getUserProfile();
      console.log("User Data", data)
      return data;
    }
    catch (error: any) {
      if (error.response && error.response.data.message) {
        thunkAPI.dispatch(setError(error.response.data.message))
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        thunkAPI.dispatch(setError(error.message));
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
)