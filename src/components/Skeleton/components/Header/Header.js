import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown, Layout, Image } from 'antd';
import { HeartOutlined, HomeOutlined } from '@ant-design/icons';
import './Header.scss';

const Header = ({ wishlist }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => navigate('/');

  return (
    <Layout.Header>
      <Button
        type="primary"
        shape="round"
        icon={<HomeOutlined />}
        size="large"
        onClick={handleHomeClick}
      >
        Home
      </Button>
      <Dropdown
        menu={{
          items: wishlist.map((movie) => ({
            key: movie.id,
            label: (
              <Image
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt={movie.title}
                preview={false}
                width={100}
                onClick={() =>
                  navigate(
                    `movies/${movie.genres[0].name.toLowerCase()}/${movie.id}`
                  )
                }
              />
            ),
          })),
        }}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <Button
          type="primary"
          shape="round"
          icon={<HeartOutlined />}
          size="large"
        >
          Wishlist
        </Button>
      </Dropdown>
    </Layout.Header>
  );
};

export default Header;
