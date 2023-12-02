import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userPwd: null,
  token: null,
  isLogin: false,
  name: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
    setPwd: (state, action) => {
      state.userPwd = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setId, setPwd, setToken, setIsLogin, setName } =
  loginSlice.actions;

export default loginSlice.reducer;
