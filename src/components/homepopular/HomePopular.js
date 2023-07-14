import styles from "./HomePopular.module.css";
const HomePopular = () => {
  return (
    <div className={styles.sectionPopular}>
      <div className={styles.productCard}>
        <div className={styles.cardDefault}>
          <img className={styles.cardBgIcon} alt="" src="/cardbg.svg" />
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.bg} />
          <div className={styles.mentor}>9.99$</div>
          <div className={styles.subject}>Spiced Mint</div>
        </div>
      </div>
      <div className={styles.productCard1}>
        <div className={styles.cardDefault}>
          <img className={styles.cardBgIcon} alt="" src="/cardbg.svg" />
          <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
          <div className={styles.bg} />
          <div className={styles.mentor}>9.99$</div>
          <div className={styles.subject}>Sweet Straweberry</div>
        </div>
      </div>
      <div className={styles.productCard2}>
        <div className={styles.cardDefault}>
          <img className={styles.cardBgIcon} alt="" src="/cardbg.svg" />
          <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
          <div className={styles.bg} />
          <div className={styles.mentor}>9.99$</div>
          <div className={styles.subject}>Cool Blueberries</div>
        </div>
      </div>
      <div className={styles.productCard3}>
        <div className={styles.cardDefault}>
          <img className={styles.cardBgIcon} alt="" src="/cardbg.svg" />
          <img className={styles.image1Icon} alt="" src="/image-13@2x.png" />
          <div className={styles.bg} />
          <div className={styles.mentor}>9.99$</div>
          <div className={styles.subject}>Juicy Lemon</div>
        </div>
      </div>
      <div className={styles.sectionText}>
        <div className={styles.description}>
          Our top selling product that you may like
        </div>
        <div className={styles.titleH2}>Popular</div>
      </div>
    </div>
  );
};

export default HomePopular;
