import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Movies from "./Components/Pages/Movies/Movies";
import Celebrities from "./Components/Pages/Celebrity/Celebrities";
import TVs from "./Components/Pages/TV/TVs";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/Header";
import Login from "./Components/Pages/Login/Login";
import MovieDetail from "./Components/Pages/Movies/MovieDetail";
import { Provider } from "react-redux";
import store from "./store";
import KakaoRedirect from "./Components/Pages/Login/KakaoRedirect";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/movies" element={<Movies></Movies>}></Route>
            <Route
              path="/movie/:title"
              element={<MovieDetail></MovieDetail>}
            ></Route>
            <Route
              path="/celebrities"
              element={<Celebrities></Celebrities>}
            ></Route>
            <Route path="/tvs" element={<TVs></TVs>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/oauth"
              element={<KakaoRedirect></KakaoRedirect>}
            ></Route>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
