import React from "react";
import {
  Hover,
  HoverTitle,
  Info,
  MovieWrap,
  Overview,
  Poster,
} from "../Movies/Movie";

export default function TV({ title, rate, poster, overview }) {
  const tvPosterURL = `https://image.tmdb.org/t/p/w1280/${poster}`;
  return (
    <MovieWrap>
      <Hover>
        <HoverTitle>{title}</HoverTitle>
        <Overview>{overview}</Overview>
      </Hover>
      <Poster src={tvPosterURL}></Poster>
      <Info>
        <h4 style={{ marginRight: "3px" }}>{title}</h4>
        <span>{rate}</span>
      </Info>
    </MovieWrap>
  );
}
