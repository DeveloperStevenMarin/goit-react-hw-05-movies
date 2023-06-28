import { API_KEY } from 'Key';
import Navbar from 'components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Movies() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const [queryMovies, setQueryMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await response.json();
        console.log(data.results);
        setQueryMovies(data.results)
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <div>
      <Navbar />
      <h2 className="title__trending-title">{query}</h2>
      <ul>
        {queryMovies.map(movie => (
          <li key={movie.id}>
            <Link className="element__movie-title" to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
