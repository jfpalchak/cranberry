import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, registerUser, signIn, signOut } from "./authActions";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAuthentication } from "./authActions";
import type { RootState } from "./store";
import type { IUser } from "../types";

const initialState: IState = {
  token: '',
  userId: '',
  userData: null,
  isLoggedIn: false,
  error: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state) => {
        state.error = '';
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        const { token, userId } = payload;
        state.isLoggedIn = true;
        state.token = token;
        state.userId = userId;
        state.error = '';
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state = initialState;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.userData = null;
      })

  }
});

interface IState {
  token: string;
  userId: string;
  userData: IUser | null;
  isLoggedIn: boolean;
  error: string;
}


export const selectAuth = (state: RootState) => state.auth;

export const { setError } = authSlice.actions;

export default authSlice.reducer;