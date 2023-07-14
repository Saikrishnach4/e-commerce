import styles from "./HomeTestimonial.module.css";
const HomeTestimonial = () => {
  return (
    <div className={styles.sectionTestimonials}>
      <div className={styles.bg} />
      <div className={styles.cardsTestimonial}>
        <div className={styles.cardTestimonial}>
          <div className={styles.bg1} />
          <div className={styles.author}>Luisa</div>
          <div className={styles.title}>
            “I love it! No more air fresheners”
          </div>
          <img className={styles.starsIcon} alt="" src="/stars.svg" />
          <img className={styles.imgIcon} alt="" src="/img.svg" />
        </div>
      </div>
      <div className={styles.cardsTestimonial1}>
        <div className={styles.cardTestimonial}>
          <div className={styles.bg1} />
          <div className={styles.author}>Edoardo</div>
          <div className={styles.title}>“Raccomended for everyone”</div>
          <img className={styles.starsIcon} alt="" src="/stars1.svg" />
          <img className={styles.imgIcon} alt="" src="/img1.svg" />
        </div>
      </div>
      <div className={styles.cardsTestimonial2}>
        <div className={styles.cardTestimonial}>
          <div className={styles.bg1} />
          <div className={styles.author}>Mart</div>
          <div className={styles.title}>
            “Looks very natural, the smell is awesome”
          </div>
          <img className={styles.starsIcon} alt="" src="/stars.svg" />
          <img className={styles.imgIcon} alt="" src="/img2.svg" />
        </div>
      </div>
      <div className={styles.sectionText}>
        <div className={styles.description}>
          Some quotes from our happy customers
        </div>
        <div className={styles.titleH2}>Testimonials</div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
