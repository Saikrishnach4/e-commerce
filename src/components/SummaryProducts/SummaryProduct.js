import styles from "./SummaryProduct.module.css";
const SummaryProduct = () => {
  return (
    <form className={styles.summaryProduct}>
      <div className={styles.bg} />
      <div className={styles.label}>Total</div>
      <div className={styles.price}>$ 9.99</div>
      <img className={styles.summaryProductChild} alt="" src="/line-3.svg" />
      <div className={styles.shipping}>
        <div className={styles.shipping1}>Calculated at the next step</div>
        <div className={styles.label1}>Shipping</div>
      </div>
      <div className={styles.price1}>
        <div className={styles.price2}>$ 9.99</div>
        <div className={styles.label1}>Subtotal</div>
      </div>
      <img className={styles.summaryProductItem} alt="" src="/line-3.svg" />
      <div className={styles.coupon}>
        <input
          className={styles.inputcoupon}
          type="text"
          placeholder="Coupon code"
        />
        <button className={styles.button}>
          <div className={styles.addCode}>Add code</div>
        </button>
      </div>
      <img className={styles.summaryProductInner} alt="" src="/line-3.svg" />
      <div className={styles.product}>
        <div className={styles.price3}>$ 9.99</div>
        <div className={styles.productName}>Spiced Mint Candleaf®</div>
        <div className={styles.productImage}>
          <div className={styles.bg1} />
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
        <div className={styles.counter}>
          <div className={styles.bg2} />
          <div className={styles.div}>1</div>
        </div>
      </div>
    </form>
  );
};

export default SummaryProduct;
