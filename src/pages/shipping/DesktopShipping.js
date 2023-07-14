import { useCallback } from "react";
import SummaryProduct from "../../components/SummaryProducts/SummaryProduct";
import styles from "./DesktopShipping.module.css";
const DesktopShipping = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Desktop/Payment" to the project
  }, []);

  const onBackClick = useCallback(() => {
    // Please sync "Desktop/Authentication" to the project
  }, []);

  return (
    <div className={styles.desktopshipping}>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.button1}>Go to payment</div>
      </button>
      <button className={styles.back} onClick={onBackClick}>
        Back to details
      </button>
      <div className={styles.shippingParent}>
        <div className={styles.shipping}>
          <div className={styles.bg} />
          <b className={styles.price}>Free</b>
          <div className={styles.type}>Standard Shipping</div>
          <input className={styles.roundCheckbox} type="radio" />
        </div>
        <div className={styles.sectionTitle}>Shipping method</div>
      </div>
      <div className={styles.bgParent}>
        <div className={styles.bg1} />
        <div className={styles.shipto}>
          <div className={styles.shipto1}>Ship to</div>
          <button className={styles.edit}>Edit</button>
          <div className={styles.address}>
            Via Firenze 23, 92023, Campobello di Licata AG, Italia
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/line.svg" />
        <div className={styles.contact}>
          <button className={styles.edit}>Edit</button>
          <div className={styles.email}>joe.spagnuolo@uxbly.com</div>
          <div className={styles.contact1}>Contact</div>
        </div>
      </div>
      <div className={styles.chevronrightParent}>
        <img
          className={styles.chevronrightIcon}
          alt=""
          src="/chevronright.svg"
        />
        <img
          className={styles.chevronrightIcon1}
          alt=""
          src="/chevronright.svg"
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
      <SummaryProduct />
      <div className={styles.navdesktop}>
        <div className={styles.bg2} />
        <div className={styles.navdesktopChild} />
        <div className={styles.cart}>
          <img className={styles.cartIcon} alt="" src="/cart.svg" />
          <div className={styles.counter}>
            <div className={styles.bg3} />
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
    </div>
  );
};

export default DesktopShipping;
