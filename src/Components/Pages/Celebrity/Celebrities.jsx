import React, { useEffect, useState } from "react";
import { MoviesContainer } from "../Movies/Movies";
import axios from "axios";
import Celebrity from "./Celebrity";

export default function Celebrities() {
  const token = process.env.REACT_APP_TMDB_TOKEN;
  const [celebs, setCelebs] = useState([]);
  const [page, setPage] = useState(1);
  const fetchCelebs = async () => {
    try {
      const endpoint = `https://api.themoviedb.org/3/person/popular?language=ko-KR&page=${page}`;
      const res = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });
      setCelebs((prev) => [...prev, ...res.data.results]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCelebs();
  }, [page]);
  return (
    <div>
      <MoviesContainer>
        {celebs.map((item) => {
          return (
            <Celebrity
              key={item.id}
              name={item.name}
              rate={Math.round(item.popularity)}
              profile={item.profile_path}
            ></Celebrity>
          );
        })}
      </MoviesContainer>
    </div>
  );
}
