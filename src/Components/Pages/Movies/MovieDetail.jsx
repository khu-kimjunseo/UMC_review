import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  const PosterURL = `https://image.tmdb.org/t/p/w1280/${state.poster}`;
  return (
    <DetailWrap>
      <Poster src={PosterURL}></Poster>
      <Title>{title}</Title>
    </DetailWrap>
  );
}

const DetailWrap = styled.div`
  position: relative;
  left: 10vw;
  top: 5vh;
  display: flex;
`;

const Poster = styled.img`
  width: 40%;
`;

const Title = styled.div`
  font-weight: 600;
  margin: 1%;
  font-size: 30px;
`;
