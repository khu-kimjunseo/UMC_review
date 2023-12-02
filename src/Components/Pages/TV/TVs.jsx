import React, { useEffect, useState } from "react";
import { MoviesContainer } from "../Movies/Movies";
import axios from "axios";
import TV from "./TV";
import styled from "styled-components";

export default function TVs() {
  const token = process.env.REACT_APP_TMDB_TOKEN;

  const [tvs, setTVs] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTVs = async () => {
    try {
      const endpoint = `https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=${page}`;
      const res = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });
      console.log(res.data);
      setTVs(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTVs();
  }, [page]);

  const lis = [];
  const clickPage = (i) => {
    return (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
      setPage(i);
    };
  };

  for (let i = page - 2; lis.length < 5; i++) {
    if (i > 0) {
      if (i === page) {
        lis.push(
          <PageBtn current={true} onClick={clickPage(i)}>
            {i}
          </PageBtn>,
        );
      } else {
        lis.push(
          <PageBtn current={false} onClick={clickPage(i)}>
            {i}
          </PageBtn>,
        );
      }
    }
  }

  return (
    <PageWrap>
      <MoviesContainer>
        {tvs.map((item) => {
          return (
            <TV
              key={item.id}
              title={item.name}
              rate={Math.round(item.vote_average * 10) / 10}
              poster={item.poster_path}
              overview={item.overview}
            ></TV>
          );
        })}
      </MoviesContainer>
      <ButtonWrap>
        <PagingBtn
          style={page === 1 ? { opacity: 0 } : {}}
          onClick={clickPage((prev) => prev - 1)}
        >
          이전
        </PagingBtn>
        <Pagelist>{lis}</Pagelist>
        <PagingBtn onClick={clickPage((prev) => prev + 1)}>다음</PagingBtn>
      </ButtonWrap>
    </PageWrap>
  );
}

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const Pagelist = styled.ul`
  display: flex;
`;

const PageBtn = styled.li`
  width: 46px;
  margin: 10px;
  font-size: 30px;
  padding: 8px 8px;
  border-radius: 5px;
  text-align: center;
  background-color: ${(props) => (props.current ? "#373b69" : "none")};
  color: ${(props) => (props.current ? "white" : "black")};
  cursor: pointer;
  ${(props) => (!props.current ? "&:hover {background-color:#ddd" : "")}
`;

const PagingBtn = styled.button`
  display: flex;
  width: 60px;
  height: 30px;
  outline: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 10px;
  font-weight: 600;
  font-family: Pretendard;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
