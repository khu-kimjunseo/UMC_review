import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Components/Pages/Login/LoginSlice";

const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});

export default store;
