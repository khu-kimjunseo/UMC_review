import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import store from "../../../store";
import { setId, setIsLogin, setPwd, setToken } from "./LoginSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import kakao from "./kakao_login_large_wide.png";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.login.userId);
  const userPwd = useSelector((state) => state.login.userPwd);
  const [fetching, setFetching] = useState(false);
  const postLogin = async () => {
    const endpoint = "http://localhost:8000/user/login";
    const requestBody = {
      id: userId,
      pw: userPwd,
    };

    try {
      setFetching(true);
      console.log("fetching");
      const res = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      setFetching(false);
      dispatch(setToken(res.data.result.AccessToken));
      localStorage.setItem("token", res.data.result.AccessToken);
      dispatch(setIsLogin(true));
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const redirect = () => {
    const API_KEY = process.env.REACT_APP_K_REST_API;
    const REDIRECT_URI = `http://localhost:3000/oauth`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  return (
    <Provider store={store}>
      <LoginContainer>
        <Header>이메일과 비밀번호를 입력해주세요.</Header>
        <form>
          <Content>
            <Label>
              아이디
              <Input
                type="text"
                onChange={(e) => {
                  dispatch(setId(e.target.value));
                }}
              ></Input>
            </Label>
          </Content>
          <Content>
            <Label>
              비밀번호
              <Input
                type="password"
                onChange={(e) => {
                  dispatch(setPwd(e.target.value));
                }}
              ></Input>
            </Label>
          </Content>
          <SubmitButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              postLogin();
            }}
          >
            {fetching ? "로딩중..." : "확인"}
          </SubmitButton>
        </form>
        <KakaoLogin src={kakao} onClick={redirect}></KakaoLogin>
      </LoginContainer>
    </Provider>
  );
}

const LoginContainer = styled.div`
  width: 80vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-size: 3rem;
`;

const Content = styled.div`
  display: flex;
  width: 97%;
  margin: 1%;
`;

const Label = styled.label`
  font-size: 1rem;
  width: 100%;
`;
const Input = styled.input`
  width: 98%;
  height: 5vh;
  border: 1px solid lightgray;
  border-radius: 7px;
  font-size: 20px;
  outline: 1.2px solid darkblue;
  margin: 1%;
  padding-left: 1%;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 1rem;
  width: 60%;
  margin: 0 auto;
  border-radius: 20px;
  height: 4vh;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "gray" : " rgba(3, 37, 65, 1)"};
  color: white;
  margin-bottom: 10px;
`;

const KakaoLogin = styled.img`
  margin: 0 auto;
  height: 4vh;
  cursor: pointer;
`;
