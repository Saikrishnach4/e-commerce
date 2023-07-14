import styles from "./Navdesktopauth.module.css";
const Navdesktopauth = () => {
  return (
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
        <img className={styles.chevrondownIcon} alt="" src="/chevrondown.svg" />
        <div className={styles.discovery}>Discovery</div>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
    </div>
  );
};

export default Navdesktopauth;
