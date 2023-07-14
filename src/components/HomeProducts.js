import React from 'react';

import HomeProductCard from './homeproductcard/HomeProductCard';

const HomeProducts = () => {
  const products = [
    {
      imageSrc: '/image-1@2x.png',
      price: '9.99$',
      name: 'Spiced Mint',
    },
    {
      imageSrc: '/image-14@2x.png',
      price: '9.99$',
      name: 'Fresh orange',
    },
    {
      imageSrc: '/image-11@2x.png',
      price: '9.99$',
      name: 'Sweet Straweberry',
    },
    {
      imageSrc: '/image-15@2x.png',
      price: '9.99$',
      name: 'Fragrant Cinnamon',
    },
    {
      imageSrc: '/image-12@2x.png',
      price: '9.99$',
      name: 'Cool Blueberries',
    },
    {
      imageSrc: '/image-16@2x.png',
      price: '9.99$',
      name: 'Summer Cherries',
    },
    {
      imageSrc: '/image-13@2x.png',
      price: '9.99$',
      name: 'Juicy Lemon',
    },
    {
      imageSrc: '/image-17@2x.png',
      price: '9.99$',
      name: 'Clean Lavander',
    },
  ];

  return <HomeProductCard products={products} />;
};

export default HomeProducts;
