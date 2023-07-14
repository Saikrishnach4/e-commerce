import { useCallback } from "react";
import SummaryProduct from "../../components/SummaryProducts/SummaryProduct";
import styles from "./DesktopPayment.module.css";
const DesktopPayment = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Desktop/Thanks" to the project
  }, []);

  const onBackClick = useCallback(() => {
    // Please sync "Desktop/Shipping" to the project
  }, []);

  return (
    <div className={styles.desktoppayment}>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.button1}>Pay now</div>
      </button>
      <button className={styles.back} onClick={onBackClick}>
        Back to shipping
      </button>
      <div className={styles.taxinfo}>
        <input
          className={styles.inputbig}
          type="text"
          placeholder="VAT number  (optional)"
        />
        <input
          className={styles.inputbig1}
          type="text"
          placeholder="PEC (optional)"
        />
        <div className={styles.sectionTitle}>Tax Informations</div>
      </div>
      <div className={styles.billingAddress}>
        <div className={styles.billing}>
          <div className={styles.bg} />
          <div className={styles.type}>Use a different address for billing</div>
          <input className={styles.roundCheckbox} type="radio" />
          <img className={styles.billingChild} alt="" src="/line-1.svg" />
          <div className={styles.type1}>Same as the shipping address</div>
          <input className={styles.roundCheckbox1} type="radio" />
        </div>
        <div className={styles.sectionTitle1}>Billing address</div>
      </div>
      <div className={styles.creditCard}>
        <div className={styles.bg1} />
        <input className={styles.inputPaysmall} type="text" placeholder="CVV" />
        <input
          className={styles.inputPaysmall1}
          type="text"
          placeholder="Expiration (MM/YY)"
        />
        <input
          className={styles.inputPaybig}
          type="text"
          placeholder="Holder Name"
        />
        <input
          className={styles.inputPaybig1}
          type="text"
          placeholder="Card Number"
        />
        <div className={styles.cardHeading}>
          <img className={styles.bgIcon} alt="" src="/bg.svg" />
          <b className={styles.paymentType}>Credit Card</b>
          <img
            className={styles.creditcardfillIcon}
            alt=""
            src="/creditcardfill.svg"
          />
        </div>
        <div className={styles.sectionTitle2}>Payment method</div>
      </div>
      <div className={styles.summaryInfo}>
        <div className={styles.bg2} />
        <div className={styles.method}>
          <button className={styles.edit}>Edit</button>
          <div className={styles.standard}>
            <span>{`Standard Shipping - `}</span>
            <span className={styles.free}>FREE</span>
          </div>
          <div className={styles.method1}>Method</div>
        </div>
        <img className={styles.summaryInfoChild} alt="" src="/line.svg" />
        <div className={styles.shipto}>
          <div className={styles.shipto1}>Ship to</div>
          <button className={styles.edit}>Edit</button>
          <div className={styles.address}>
            Via Firenze 23, 92023, Campobello di Licata AG, Italia
          </div>
        </div>
        <img className={styles.summaryInfoItem} alt="" src="/line.svg" />
        <div className={styles.contact}>
          <button className={styles.edit}>Edit</button>
          <div className={styles.standard}>joe.spagnuolo@uxbly.com</div>
          <div className={styles.method1}>Contact</div>
        </div>
      </div>
      <div className={styles.steps}>
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
          src="/chevronright.svg"
        />
        <div className={styles.step4}>Payment</div>
        <div className={styles.step3}>Shipping</div>
        <div className={styles.step2}>Details</div>
        <div className={styles.step1}>Cart</div>
      </div>
      <div className={styles.navdesktop}>
        <div className={styles.bg3} />
        <div className={styles.navdesktopChild} />
        <div className={styles.cart}>
          <img className={styles.cartIcon} alt="" src="/cart.svg" />
          <div className={styles.counter}>
            <div className={styles.bg4} />
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
      <SummaryProduct />
    </div>
  );
};

export default DesktopPayment;
