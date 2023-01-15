import React from 'react';
import Carousel from './components/Carousel';
import useMovies from '../../hooks/useMovies';

const Home = () => {
  const { actionMovies, comedyMovies, horrorMovies } = useMovies();
  return (
    <>
      <Carousel movies={actionMovies} />
      <Carousel movies={comedyMovies} />
      <Carousel movies={horrorMovies} />
    </>
  );
};

export default Home;
