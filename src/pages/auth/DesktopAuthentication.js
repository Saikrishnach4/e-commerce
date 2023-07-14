import { useCallback } from "react";
import SummaryProduct from '../../components/SummaryProducts/SummaryProduct.js';
import Navdesktopauth from "../../components/navdesktopauth/Navdesktopauth.js"
import styles from "./DesktopAuthentication.module.css";
const DesktopAuthentication = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Desktop/Shipping" to the project
  }, []);

  const onBackClick = useCallback(() => {
    // Please sync "Desktop/Cart" to the project
  }, []);

  return (
    <div className={styles.desktopauthentication}>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.button1}>Go to shipping</div>
      </button>
      <button className={styles.back} onClick={onBackClick}>
        Back to cart
      </button>
      <div className={styles.shippingAddress}>
        <div className={styles.checkbox}>
          <input className={styles.squareCheckbox} type="checkbox" />
          <div className={styles.label}>
            Save this informations for a future fast checkout
          </div>
        </div>
        <input
          className={styles.inputbig}
          type="text"
          placeholder="Address and number"
        />
        <input
          className={styles.inputbig1}
          type="text"
          placeholder="Shipping note (optional)"
        />
        <input className={styles.inputmedium} type="text" placeholder="Name" />
        <input
          className={styles.inputmedium1}
          type="text"
          placeholder="Second Name"
        />
        <input className={styles.inputsmall} type="text" placeholder="City" />
        <input
          className={styles.inputsmall1}
          type="number"
          placeholder="Postal Code"
        />
        <button className={styles.dropdownsmall}>
          <div className={styles.bg} />
          <img className={styles.dropIcon} alt="" src="/drop.svg" />
          <div className={styles.placeholder}>Province</div>
          <div className={styles.label1}>Province</div>
        </button>
        <button className={styles.dropdownbig}>
          <div className={styles.bg} />
          <img className={styles.dropIcon1} alt="" src="/drop.svg" />
          <div className={styles.placeholder1}>Italy</div>
          <div className={styles.label2}>Country/Region</div>
        </button>
        <div className={styles.sectionTitle}>Shipping Address</div>
      </div>
      <div className={styles.contact}>
        <div className={styles.checkbox1}>
          <div className={styles.label3}>
            Add me to Candleaf newsletter for a 10% discount
          </div>
          <input className={styles.squareCheckbox1} type="checkbox" />
        </div>
        <input
          className={styles.inputbig2}
          type="text"
          placeholder="Email or mobile phone number"
        />
        
        <button className={styles.login}>
          <span className={styles.loginTxt}>
            <span className={styles.doYouHave}>Do you have an account?</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.login1}> Login</span>
          </span>
        </button>
        <div className={styles.sectionTitle1}>Contact</div>
      </div>
      <div className={styles.steps}>
        <div className={styles.step1}>Cart</div>
        <img
          className={styles.chevronrightIcon}
          alt=""
          src="/chevronright.svg"
        />
        <div className={styles.step2}>Details</div>
        <img
          className={styles.chevronrightIcon}
          alt=""
          src="/chevronright.svg"
        />
        <div className={styles.step3}>Shipping</div>
        <img
          className={styles.chevronrightIcon}
          alt=""
          src="/chevronright1.svg"
        />
        <div className={styles.step3}>Payment</div>
      </div>
      <SummaryProduct />
      <Navdesktopauth />
    </div>
  );
};

export default DesktopAuthentication;
