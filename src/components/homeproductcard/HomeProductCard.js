import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './HomeProductCard.module.css';

const HomeProductCard = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (index, name, price, image) => {
    const productData = {
      index: index,
      name: name,
      price: price,
      image: image,
    };
    navigate('/product', { state: productData });
  };

  return (
    <div id='homeProduct' className={styles.sectionProducts}>
      {products.map((product, index) => (
        <div className={styles.productCard} key={index}>
          <div
            className={styles.cardDefault}
            onClick={() =>
              handleProductClick(index, product.name, product.price, product.imageSrc)
            }
          >
            <img className={styles.cardBgIcon} alt="" src="/cardbg.svg" />
            <img className={styles.image1Icon} alt="" src={product.imageSrc} />
            <div className={styles.bg} />
            <div className={styles.mentor}>{product.price}</div>
            <div className={styles.subject}>{product.name}</div>
          </div>
        </div>
      ))}
      <div className={styles.sectionText}>
        <div className={styles.description}>Order it for you or for your beloved ones</div>
        <div className={styles.titleH2}>Products</div>
      </div>
    </div>
  );
};

HomeProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string,
      price: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default HomeProductCard;
