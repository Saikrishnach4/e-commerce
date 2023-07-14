import { useCallback } from "react";
import styles from "./DesktopThanks.module.css";
const DesktopThanks = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Desktop/Home" to the project
  }, []);

  return (
    <div className={styles.desktopthanks}>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.button1}>Back to shopping</div>
      </button>
      <button className={styles.back}>Print receipt</button>
      <div className={styles.steps}>
        <img
          className={styles.chevronrightIcon}
          alt=""
          src="/chevronright.svg"
        />
        <img
          className={styles.chevronrightIcon1}
          alt=""
          src="/chevronright1.svg"
        />
        <img
          className={styles.chevronrightIcon2}
          alt=""
          src="/chevronright1.svg"
        />
        <div className={styles.step4}>Payment</div>
        <div className={styles.step3}>Shipping</div>
        <div className={styles.step2}>Details</div>
        <div className={styles.step1}>Cart</div>
      </div>
      <div className={styles.navdesktop}>
        <div className={styles.bg} />
        <div className={styles.navdesktopChild} />
        <div className={styles.cart}>
          <img className={styles.cartIcon} alt="" src="/cart.svg" />
          <div className={styles.counter}>
            <div className={styles.bg1} />
            <div className={styles.div}>1</div>
          </div>
        </div>
        <img className={styles.profileIcon} alt="" src="/profile.svg" />
        <div className={styles.navItem}>
          <div className={styles.contactUs}>Contact us</div>
          <div className={styles.about}>About</div>
          <img
            className={styles.chevrondownIcon}
            alt=""
            src="/chevrondown.svg"
          />
          <div className={styles.discovery}>Discovery</div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
      </div>
      <div className={styles.description}>
        <span>{` `}</span>
        <span className={styles.thankYouJoe}>
          Thank you Joe for buying Candleaf. The nature is grateful to you. Now
          that your order is confirmed it will be ready to ship in 2 days.
          Please check your inbox in the future for your order updates.
        </span>
      </div>
      <div className={styles.ordernum}>ORDER #2039</div>
      <div className={styles.paymentConfirmed}>Payment Confirmed</div>
      <img className={styles.checkcircleIcon} alt="" src="/checkcircle.svg" />
      <div className={styles.summaryProduct}>
        <div className={styles.bg2} />
        <div className={styles.label}>Paid</div>
        <div className={styles.price}>$ 9.99</div>
        <img className={styles.summaryProductChild} alt="" src="/line-3.svg" />
        <div className={styles.shipping}>
          <div className={styles.shipping1}>Free Shipping</div>
          <div className={styles.label1}>Shipping</div>
        </div>
        <div className={styles.price1}>
          <div className={styles.price2}>$ 9.99</div>
          <div className={styles.label2}>Subtotal</div>
        </div>
        <img className={styles.summaryProductItem} alt="" src="/line-3.svg" />
        <div className={styles.product}>
          <div className={styles.price3}>$ 9.99</div>
          <div className={styles.productName}>Spiced Mint Candleaf®</div>
          <img
            className={styles.productImageIcon}
            alt=""
            src="/productimage@2x.png"
          />
          <div className={styles.counter1}>
            <div className={styles.bg3} />
            <div className={styles.div}>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopThanks;
