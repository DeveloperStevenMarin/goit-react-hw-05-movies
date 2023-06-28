import { API_KEY } from 'Key';
import Cast from 'components/Cast/Cast';
import Navbar from 'components/Navbar/Navbar';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieImage, setMovieImage] = useState();
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const navigate = useNavigate();

  const { movieId } = useParams();
  useEffect(() => {
    // Lógica para obtener los detalles de la película desde la API
    fetchMovieDetails();
    setMovieCast(null);
  }, [movieId]);

  const fetchMovieDetails = async () => {
    try {
      // Realiza la solicitud a la API para obtener los detalles de la película
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setMovieDetails(data);
      setMovieImage('https://image.tmdb.org/t/p/w500' + data.poster_path);
    } catch (error) {
      console.error('Error al obtener los detalles de la película:', error);
    }
  };
  const fetchMovieCast = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setMovieCast(data);
        console.log(data.cast);
      } else {
        console.error(
          'Error al obtener el reparto de la película:',
          response.status
        );
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  const fetchMovieReviews = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setMovieReviews(data.results);
      } else {
        console.error(
          'Error al obtener las reseñas de la película:',
          response.status
        );
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  const openCast = async => {
    if (!movieCast) {
      fetchMovieCast();
    } else {
      navigate(-1);
      setMovieCast(null);
    }
  };
  const openReviews = async => {
    if (!movieReviews) {
      fetchMovieReviews();
    } else {
      navigate(-1);
      setMovieReviews(null);
    }
  };
  if (!movieDetails) {
    return <div>Loading movie data...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="container__movie-details">
        <img className="image__movie-details" src={movieImage}></img>
        <h2>{movieDetails.title}</h2>
        <h5>User Score: {movieDetails.vote_average}</h5>
        <h4>Overview:</h4>
        <p>{movieDetails.overview}</p>
        <h4>Genres:</h4>
        <div className='container__movie-genres'>
          {movieDetails.genres.map(genre => (
            <p>{genre.name}</p>
          ))}
        </div>

        <h4>Additional information:</h4>
        <Link to={`/movies/${movieId}/cast`} onClick={openCast}>
          {' '}
          Cast
        </Link>
        <Link to={`/movies/${movieId}/reviews`} onClick={openReviews}>
          {' '}
          Reviews
        </Link>
      </div>
      <Cast data={movieCast} />
      <Reviews data={movieReviews} />
    </div>
  );
}
