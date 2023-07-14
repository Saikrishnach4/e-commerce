import styles from "./Footer.module.css";
const Footerdesktop = () => {
  return (
    <div className={styles.footerdesktop}>
      <div className={styles.footer}>
        <div className={styles.bg} />
        <div className={styles.designedWithContainer}>
          <span>{`Designed with ❤️ by `}</span>
          <span className={styles.uxbly}>uxbly</span>
        </div>
        <div className={styles.candleaf2020All}>
          ©Candleaf All Rights Reserved.
        </div>
      </div>
      <div className={styles.footerWidgets}>
        <div className={styles.footerBg} />
        <div className={styles.col3}>
          <button className={styles.item3}>{`Terms & Conditions`}</button>
          <button className={styles.item2}>Privacy Policies</button>
          <button className={styles.item1}>Contact us</button>
          <div className={styles.titleCol3}>Info</div>
        </div>
        <div className={styles.col2}>
          <button className={styles.item31}>Affiliate</button>
          <button className={styles.item21}>Shipping</button>
          <button className={styles.item11}>Help</button>
          <div className={styles.titleCol2}>About</div>
        </div>
        <div className={styles.col1}>
          <button className={styles.item32}>Most selled</button>
          <button className={styles.item22}>Most searched</button>
          <button className={styles.item12}>New season</button>
          <div className={styles.titleCol1}>Discovery</div>
        </div>
        <div className={styles.description}>
          Your natural candle made for your home and for your wellness.
        </div>
        <div className={styles.separator} />
      </div>
      <img
        className={styles.logoWebfooterIcon}
        alt=""
        src="/logowebfooter.svg"
      />
    </div>
  );
};

export default Footerdesktop;
