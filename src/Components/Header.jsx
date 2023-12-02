import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginControl from "./Pages/Login/LoginControl";
import VerifyToken from "./Pages/Login/VerifyToken";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Link to={"/"} style={{ height: "100%" }}>
          <img
            style={{ cursor: "pointer", width: "154px", height: "100%" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </Link>

        <LinkList>
          <HeaderLink to={"/movies"}>영화</HeaderLink>
          <HeaderLink to={"/celebrities"}>인물</HeaderLink>
          <HeaderLink to={"/tvs"}>TV프로그램</HeaderLink>
          <LoginControl></LoginControl>
          <VerifyToken></VerifyToken>
        </LinkList>
      </HeaderWrap>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: rgba(3, 37, 65, 1);
  height: 60px;

  display: flex;
`;

const HeaderWrap = styled.div`
  min-width: 700px;
  margin: 0 auto;
  margin-left: 10vw;
  display: flex;
  align-items: center;
`;

const LinkList = styled.ul`
  margin-left: 12px;
  display: flex;
`;

const HeaderLink = styled(Link)`
  margin-right: 8px;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
`;

export const LoginLink = styled(HeaderLink)`
  color: black;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;

  display: flex;
  align-items: center;
`;
