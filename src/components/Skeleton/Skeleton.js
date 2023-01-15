import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import './Skeleton.scss';

const Skeleton = ({ children, wishlist }) => {
  return (
    <Layout>
      <Header wishlist={wishlist} />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};

export default Skeleton;
