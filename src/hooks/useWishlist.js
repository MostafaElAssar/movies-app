import { useQuery } from 'react-query';
import moviesService from '../services/moviesService';
import { WISHLIST } from './keys';

const useWishlist = () => {
  const { data, isLoading } = useQuery(WISHLIST, moviesService.loadWishlist);

  return {
    wishlist: Object.values(data || {}),
    isLoading,
  };
};

export default useWishlist;
