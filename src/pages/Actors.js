import { useEffect, useState } from "react";
import Card from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  const actorList = actors.map(actor => {
      <li>
        <Card key={actor.id} name={actor.name} movies={actor.movies} />
      </li>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <ul key={actors.id}>
        {actorList}
        </ul>
      </main>
    </>
  );
}

export default Actors;