import styles from "./SectionBenefits.module.css";
const SectionBenefits = () => {
  return (
    <div className={styles.sectionBenefits}>
      <div className={styles.sectionBg} />
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <button className={styles.button}>
        <div className={styles.button1}>Learn more</div>
      </button>
      <div className={styles.textLeft}>
        <div className={styles.feature4}>
          <div className={styles.feature41}>
            <span className={styles.longBurning}>Long burning:</span>
            <span> No more waste. Created for last long.</span>
          </div>
          <img
            className={styles.checkmarkCircleOutline2Icon}
            alt=""
            src="/checkmarkcircleoutline-2.svg"
          />
        </div>
        <div className={styles.feature3}>
          <div className={styles.feature41}>
            <span className={styles.longBurning}>{`Handmade: `}</span>
            <span>All candles are craftly made with love.</span>
          </div>
          <img
            className={styles.checkmarkCircleOutline1Icon}
            alt=""
            src="/checkmarkcircleoutline-2.svg"
          />
        </div>
        <div className={styles.feature2}>
          <div className={styles.feature41}>
            <span className={styles.longBurning}>{`Hyphoallergenic: `}</span>
            <span>{`100% natural, human friendly ingredients `}</span>
          </div>
          <img
            className={styles.checkmarkCircleOutline1Icon}
            alt=""
            src="/checkmarkcircleoutline-2.svg"
          />
        </div>
        <div className={styles.feature1}>
          <div className={styles.feature41}>
            <span className={styles.longBurning}>Eco-sustainable:</span>
            <span>All recyclable materials, 0% CO2 emissions</span>
          </div>
          <img
            className={styles.checkmarkCircleOutline2Icon}
            alt=""
            src="/checkmarkcircleoutline-2.svg"
          />
        </div>
        <div className={styles.subline}>
          Made for your home and for your wellness
        </div>
        <div className={styles.h2Title}>Clean and fragrant soy wax</div>
      </div>
    </div>
  );
};

export default SectionBenefits;
