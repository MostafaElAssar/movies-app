import axios from 'axios';

const MoviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: 'bbce44df3ab7afa8c2f1f2f6fe93b640',
  },
});

export default MoviesApi;
