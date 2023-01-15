import MoviesApi from '../apis/MoviesApi';
import FirebaseApi from '../apis/FirebaseApi';

async function loadGenres() {
  const { data } = await MoviesApi.get('/3/genre/movie/list');
  return data?.genres;
}

async function loadMovies() {
  const promises = Array.from(Array(5).keys()).map((el) =>
    MoviesApi.get(`/3/movie/popular?page=${el + 1}`)
  );
  const responses = await Promise.all(promises);
  const movies = responses.reduce(
    (acc, response) => [...acc, ...response.data.results],
    []
  );
  return movies;
}

async function loadMovie(id) {
  const { data } = await MoviesApi.get(`/3/movie/${id}`);
  return data;
}

async function addToWishlist(movie) {
  await FirebaseApi.post('/wishlist.json', movie);
}

async function loadWishlist() {
  const { data } = await FirebaseApi.get('/wishlist.json');
  return data;
}

const moviesService = {
  loadGenres,
  loadMovies,
  loadMovie,
  addToWishlist,
  loadWishlist,
};

export default moviesService;
