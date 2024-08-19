
function Card({name, movies}) {
    const movieList = movies.map(movie => {
        <ul key={movie}>
            <li>{movie}</li>
        </ul>
    
})
    
    return (
      <article>
          <h2>{name}</h2>
          
            {movieList}
        
      </article>
    )
  }
  
  export default Card