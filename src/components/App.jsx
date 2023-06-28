import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" Component={ Home } />
        <Route  path="/movies" Component={Movies} />
        <Route  path="/movies/:movieId" Component={MovieDetails} />
        <Route  path="/movies/:movieId/cast" Component={MovieDetails} />
        <Route  path="/movies/:movieId/reviews" Component={MovieDetails} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* Agrega más rutas si es necesario */}
      </Routes>
    </BrowserRouter>
  );
};
