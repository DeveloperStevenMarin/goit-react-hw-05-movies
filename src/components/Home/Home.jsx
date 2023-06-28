import Navbar from 'components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de películas en tendencia desde la API
    fetchTrendingMovies();
  }, []);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWM0YTViZmU4ODQ0ZjI5YjZjMDdlNzUzNTE3NGZkOSIsInN1YiI6IjY0NWM0NTYxMWI3MGFlMDBlMmFkYjY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUREvUnuPf4Bl1u_umVHNKTzOAxtDFa2lUqtcxRJWiI',
    },
  };

  const fetchTrendingMovies = async () => {
    try {
      // Realiza la solicitud a la API para obtener las películas en tendencia
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
      );
      const data = await response.json();
      setTrendingMovies(data.results);
    } catch (error) {
      console.error('Error al obtener las películas en tendencia:', error);
    }
  };

  const openSearchBar = () => {
    // Lógica para abrir la barra de búsqueda
    // Puedes usar un estado para controlar si la barra de búsqueda está abierta o cerrada
  };

  return (
    <div>
      <Navbar/>
      <h2 className='title__trending-title'>Trending Today</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link className='element__movie-title' to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

    </div>
  );
}
