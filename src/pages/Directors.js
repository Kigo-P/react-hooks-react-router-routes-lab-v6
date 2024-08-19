import { useEffect, useState } from "react";
import Card from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  const directorList = directors.map(director => {
    <li>
      <Card key={director.id} name={director.name} movies={director.movies} />
    </li>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <ul>
        {directorList}
        </ul>
      </main>
    </>
  );
}

export default Directors;