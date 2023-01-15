import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Image, Row, Typography } from 'antd';
import useMovie from '../../hooks/useMovie';
import './Movie.scss';

const Movie = ({ wishlist }) => {
  const { id, genre } = useParams();
  const { movie, onAdd } = useMovie(id, wishlist);

  if (!movie) {
    return null;
  }

  return (
    <>
      <Row gutter={[64, 16]} justify="space-around">
        <Col span={8}>
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.title}
            preview={false}
            width="100%"
          />
        </Col>
        <Col span={16}>
          <Typography className={genre}>{movie.overview}</Typography>
          <Button className={genre} type="primary" onClick={onAdd}>
            Add to wishlist
          </Button>
        </Col>
        <Col span={24}>
          <Typography
            className={genre}
          >{`Release Date: ${movie.release_date}`}</Typography>
        </Col>
      </Row>
    </>
  );
};

export default Movie;
