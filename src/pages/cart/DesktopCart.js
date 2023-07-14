import { useCallback, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./DesktopCart.module.css";

const DesktopCart = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const onButtonClick = useCallback(() => {
    navigate('/auth');
  }, [navigate]);

  const onProductNameTextClick = useCallback(() => {
    // Please sync "Desktop/Product" to the project
  }, []);

  const onBackClick = useCallback(() => {
    // Please sync "Desktop/Home" to the project
  }, []);

  return (
    <div className={styles.desktopcart}>
      <Footer />
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.button1}>Check-out</div>
      </button>
      <div className={styles.subtotal}>
        <div className={styles.vatShipping}>
          Tax and shipping cost will be calculated later
        </div>
        <div className={styles.price}>$ 9.99</div>
        <div className={styles.description}>Sub-total</div>
      </div>
      <div className={styles.productList}>
        <img className={styles.productListChild} alt="" src="/line.svg" />
        <div className={styles.product}>
          <div className={styles.total}>$ 9.99</div>
          <div className={styles.quantity}>
            <div className={styles.quantity1}>
              <div className={styles.input}>
                <div className={styles.bg1} />
                <div className={styles.placeholder}>
                  <span onClick={handleIncrease}>+</span>
                  <span className={styles.span1}>{`   ${quantity}   `}</span>
                  <span className={styles.span2} onClick={handleDecrease}>-</span>
                </div>
              </div>
              <div className={styles.description1}>Quantity</div>
            </div>
          </div>
          <div className={styles.unitPrice}>$ 9.99</div>
          <div className={styles.productName} onClick={onProductNameTextClick}>
            Spiced Mint Candleaf®
          </div>
          <button className={styles.removeItem}>Remove</button>
          <img
            className={styles.productImageIcon}
            alt=""
            src="/productimage@2x.png"
          />
        </div>
        <div className={styles.headingTable}>
          <img className={styles.headingTableChild} alt="" src="/line.svg" />
          <div className={styles.total1}>Total</div>
          <div className={styles.quantity2}>Quantity</div>
          <div className={styles.price1}>Price</div>
          <div className={styles.product1}>Product</div>
        </div>
      </div>
      <button className={styles.back} onClick={onBackClick}>
        Back to shopping
      </button>
      <div className={styles.pageName}>Your cart items</div>
      <Navbar />
    </div>
  );
};

export default DesktopCart;
