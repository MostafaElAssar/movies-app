import { message } from 'antd';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import moviesService from '../services/moviesService';
import { MOVIE, WISHLIST } from './keys';

const useMovie = (id, wishlist) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(
    [MOVIE, id],
    () => moviesService.loadMovie(id),
    {
      enabled: Boolean(id),
    }
  );

  const { mutate: onAdd } = useMutation(
    () => moviesService.addToWishlist(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(WISHLIST);
        message.success('Added to wishlist succesfully!');
      },
    }
  );

  const handleAddClick = () => {
    if (wishlist.some((movie) => String(movie.id) === id)) {
      message.error('Movie already exists in wishlist!');
    } else {
      onAdd();
    }
  };

  return {
    movie: data,
    isLoading,
    onAdd: handleAddClick,
  };
};

export default useMovie;
