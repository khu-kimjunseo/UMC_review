import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Movie({ title, rate, poster, overview }) {
  const navigate = useNavigate();
  const PosterURL = `https://image.tmdb.org/t/p/w1280/${poster}`;
  return (
    <MovieWrap>
      <Hover>
        <HoverTitle>{title}</HoverTitle>
        <Overview>{overview}</Overview>
      </Hover>
      <Poster
        src={PosterURL}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/movie/${title}`, {
            state: { title, rate, poster, overview },
          });
        }}
      ></Poster>
      <Info>
        <h4 style={{ marginRight: "3px" }}>{title}</h4>
        <span>{rate}</span>
      </Info>
    </MovieWrap>
  );
}
export const Hover = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.7);

  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  overflow: auto;

  opacity: 0;
`;

export const HoverTitle = styled.div`
  font-weight: 600;
  font-size: 2em;
  padding: 10%;
`;

export const Overview = styled.div`
  font-size: 1.5em;
  padding: 10%;
  padding-top: 0%;
`;

export const MovieWrap = styled.div`
  position: relative;
  margin: 1vw;
  padding: 0.5vw;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    width: 25vw;
  }
  @media screen and (min-width: 800px) {
    width: 20vw;
  }
  @media screen and (min-width: 1100px) {
    width: 15vw;
  }

  &: hover ${Hover} {
    opacity: 1;
  }
`;

export const Poster = styled.img`
  max-width: 100%;
  margin-bottom: 0.8vh;
`;

export const Info = styled.div`
  padding: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
