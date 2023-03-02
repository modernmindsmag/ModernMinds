import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isAuthenticated: false,
  loginView: false,
  registerView: false,
  isLogedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state) {
      state.isAuthenticated = true;
    },
    setLogoutState(state) {
      state.isAuthenticated = false;
    },
    setOpenLoginViewState(state) {
      state.loginView = true;
    },
    setCloseLoginViewState(state) {
      state.loginView = false;
    },
    setOpenRegisterViewState(state) {
      state.registerView = true;
    },
    setCloseRegisterViewState(state) {
      state.registerView = false;
    },
    setIsLogedIn(state) {
      state.isLogedIn = true;
    },
    setCloseIsLogedIn(state) {
      state.isLogedIn = false;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const {
  setAuthState,
  setLogoutState,
  setOpenLoginViewState,
  setCloseLoginViewState,
  setOpenRegisterViewState,
  setCloseRegisterViewState,
  setIsLogedIn,
  setCloseIsLogedIn,
} = authSlice.actions;
export default authSlice.reducer;
