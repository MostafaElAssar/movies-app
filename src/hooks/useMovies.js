import { useQuery } from 'react-query';
import moviesService from '../services/moviesService';
import { GENRES, MOVIES } from './keys';

const ACTION = 'Action';

const COMEDY = 'Comedy';

const HORROR = 'Horror';

const useMovies = () => {
  const { data: genres = [], isLoading: isLoadingGenres } = useQuery(
    GENRES,
    moviesService.loadGenres
  );

  const { data: movies = [], isLoading: isLoadingMovies } = useQuery(
    MOVIES,
    moviesService.loadMovies,
    {
      enabled: genres.length > 0,
    }
  );

  const normalizedGenres = genres.reduce((acc, el) => {
    return { ...acc, [el.id]: el.name };
  }, {});

  const moviesWithGenres = movies.map((movie) => ({
    ...movie,
    genres: movie.genre_ids.map((id) => normalizedGenres[id]),
  }));

  const actionMovies = moviesWithGenres
    .filter((movie) => movie.genres[0] === ACTION)
    .slice(-5);

  const comedyMovies = moviesWithGenres
    .filter((movie) => movie.genres[0] === COMEDY)
    .slice(-5);

  const horrorMovies = moviesWithGenres
    .filter((movie) => movie.genres[0] === HORROR)
    .slice(-5);

  return {
    actionMovies,
    comedyMovies,
    horrorMovies,
    isLoading: isLoadingGenres || isLoadingMovies,
  };
};

export default useMovies;
