import React from "react";
import { Info, MovieWrap, Poster } from "../Movies/Movie";

export default function Celebrity({ name, rate, profile }) {
  const ProfileURL = `https://image.tmdb.org/t/p/w1280/${profile}`;
  return (
    <MovieWrap>
      <Poster src={ProfileURL}></Poster>
      <Info>
        <h4 style={{ marginRight: "3px" }}>{name}</h4>
        <span>{rate}</span>
      </Info>
    </MovieWrap>
  );
}
