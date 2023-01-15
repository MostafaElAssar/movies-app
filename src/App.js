import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Skeleton from './components/Skeleton';
import useWishlist from './hooks/useWishlist';
import './App.scss';

const App = () => {
  const { wishlist } = useWishlist();

  return (
    <Router>
      <Skeleton wishlist={wishlist}>
        <Routes wishlist={wishlist} />
      </Skeleton>
    </Router>
  );
};

export default App;
