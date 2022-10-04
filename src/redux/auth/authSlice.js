import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, refreshUser } from 'redux/auth/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //*Sign-up
    [signUp.pending]: handlePending,
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [signUp.rejected]: handleRejected,

    //*Sign-in
    [signIn.pending]: handlePending,
    [signIn.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [signIn.rejected]: handleRejected,

    //*Sign-out
    [signOut.pending]: handlePending,
    [signOut.fulfilled](state) {
      state.isLoading = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [signOut.rejected]: handleRejected,

    //*refresh User
    [refreshUser.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
