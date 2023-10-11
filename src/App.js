import Movie from "./Components/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="App">
      {
        movies.results.map((item) => {
          return(
            <Movie title={item.title} rate={item.vote_average} url={item.poster_path} overview={item.overview}></Movie>
          )
        })
      }      
    </div>
  );
}

export default App;
