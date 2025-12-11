import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null, // full user object
  token: null, // JWT token
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload.user; // user data
      state.token = action.payload.token; // JWT
    },

    logout: (state) => {
      state.loggedInUser = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
