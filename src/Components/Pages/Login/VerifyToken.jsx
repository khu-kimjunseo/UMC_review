import React from "react";
import { LoginLink } from "../../Header";
import axios from "axios";

export default function VerifyToken() {
  const verifyToken = async () => {
    const endpoint = "http://localhost:8000/user/payload";
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(endpoint, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data);
      alert(res.data.result.name);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <LoginLink
      onClick={(e) => {
        e.preventDefault();
        verifyToken();
      }}
    >
      토큰 검증
    </LoginLink>
  );
}
