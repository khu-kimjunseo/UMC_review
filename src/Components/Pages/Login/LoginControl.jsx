import React from "react";
import { LoginLink } from "../../Header";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store";
import { setId, setIsLogin, setPwd } from "./LoginSlice";
import { useNavigate } from "react-router-dom";

export default function LoginControl() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const name = useSelector((state) => state.login.name);
  return (
    <Provider store={store}>
      <LoginLink
        onClick={(e) => {
          e.preventDefault();
          if (isLogin) {
            dispatch(setIsLogin(false));
            dispatch(setId(null));
            dispatch(setPwd(null));
            localStorage.removeItem("token");
          } else {
            navigate("/login");
          }
        }}
      >
        {isLogin ? name : "로그인"}
      </LoginLink>
    </Provider>
  );
}
