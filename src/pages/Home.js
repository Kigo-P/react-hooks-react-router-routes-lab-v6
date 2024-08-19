import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar"

function Home() {
const [movies, setMovies] = useState([])

useEffect(() =>{
  fetch("http://localhost:4000/movies")
  .then(r => r.json())
  .then(data => setMovies(data))
  .catch(error => console.error(error))
}, [])

const movieList = movies.map(movie => {
  <li>
    <MovieCard  title={movie.title} id={movie.id}/>
  </li>
})

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul key={movies.id}>
        {movieList}
        </ul>
      </main>
    </>
  );
}

export default Home;