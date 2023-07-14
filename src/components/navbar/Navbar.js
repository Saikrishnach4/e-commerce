import React, { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import HomeProducts from "../HomeProducts";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const homeProductsRef = useRef(null);

  const scrollToHomeProducts = () => {
    scroll.scrollTo(homeProductsRef.current.offsetTop - 100, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className={styles.navdesktopWrapper}>
      <div className={styles.navdesktop}>
        <div className={styles.bg} />
        <div className={styles.navdesktopChild} />
        <button className={styles.cart}>
          <img className={styles.cartIcon} alt="" src="/cart1.svg" />
          <div className={styles.counter}>
            <div className={styles.bg1} />
            <div className={styles.div}>1</div>
          </div>
        </button>
        <button className={styles.profile}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
        <div className={styles.contactUsParent}>
          <button className={styles.contactUs}>Contact us</button>
          <button className={styles.about}>About</button>
          <div className={styles.chevrondownParent}>
            <img
              className={styles.chevrondownIcon}
              alt=""
              src="/chevrondown.svg"
            />
            <Link
              to="homeProducts"
              smooth={true}
              duration={500}
              offset={850}
              className={styles.discovery}
              onClick={scrollToHomeProducts}
            >
              Discovery
            </Link>
          </div>
        </div>
        <button className={styles.logo}>
          <img
            className={styles.wordmarkIcon}
            alt=""
            src="/wordmark.svg"
          />
          <img className={styles.icon} alt="" src="/icon.svg" />
        </button>
      </div>

      <div>
        {/* Content above the HomeProducts component */}
      </div>

      <div ref={homeProductsRef} id="homeProducts">
        <HomeProducts />
      </div>

      <div>
        {/* Content below the HomeProducts component */}
      </div>
    </div>
  );
};

export default Navbar;
