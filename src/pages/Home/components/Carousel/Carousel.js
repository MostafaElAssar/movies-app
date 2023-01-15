import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel as AntdCarousel, Image } from 'antd';
import './Carousel.scss';

const Carousel = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <AntdCarousel autoplay dotPosition="bottom">
      {movies.map((movie) => (
        <Image
          onClick={() =>
            navigate(`movies/${movie.genres[0].toLowerCase()}/${movie.id}`)
          }
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          preview={false}
          width="75%"
        />
      ))}
    </AntdCarousel>
  );
};

export default Carousel;
