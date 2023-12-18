import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, registerUser, signIn, signOut } from "./authActions";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../types";
import { getCredentials } from "../helpers/credentials-helper";

// initialize state:
// if user is still logged in local storage, keep isLoggedIn true,
// otherwise initialize empty user state
const userAuth = getCredentials();
const initialState: IState = userAuth.token && userAuth.userId
  ? {
      token: userAuth.token,
      userId: userAuth.userId,
      userData: null,
      isLoggedIn: true,
      error: ''
    }
  : {
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
        state.token = '';
        state.userId = '';
        state.userData = null;
        state.isLoggedIn = false;
        state.error = '';
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

export const { setError } = authSlice.actions;
export default authSlice.reducer;