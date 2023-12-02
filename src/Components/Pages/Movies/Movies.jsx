import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import axios from "axios";
import { PulseLoader } from "react-spinners";

export default function Movies() {
  const token = process.env.REACT_APP_TMDB_TOKEN;

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const target = useRef(null);

  const fetchMovies = async () => {
    try {
      const endpoint = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`;
      const res = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });

      console.log(res.data);
      setMovies((prev) => [...prev, ...res.data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPage((prev) => prev + 1);
          }
        });
      },
      { rootMargin: "10%", threshold: 0 },
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, []);

  return (
    <div>
      <MoviesContainer>
        {movies.map((item) => {
          return (
            <Movie
              key={item.id}
              title={item.title}
              rate={Math.round(item.vote_average * 10) / 10}
              poster={item.poster_path}
              overview={item.overview}
            ></Movie>
          );
        })}
      </MoviesContainer>
      <LoaderWrap ref={target}>
        <PulseLoader color="navy"></PulseLoader>
      </LoaderWrap>
    </div>
  );
}

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (min-width: 500px) {
    width: 84vw;
  }
  @media screen and (min-width: 800px) {
    width: 92vw;
  }
  @media screen and (min-width: 1100px) {
    width: 90vw;
  }
`;

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
