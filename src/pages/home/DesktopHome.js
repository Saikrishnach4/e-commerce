import Footerdesktop from "../../components/footerdesktop/Footerdesktop";
import HomePopular from "../../components/homepopular/HomePopular";
import HomeTestimonial from "../../components/hometestimonial/HomeTestimonial";
import SectionBenefits from "../../components/sectionalbenifits/SectionBenefits";
import HomeProducts from "../../components/HomeProducts";
import Navbar from "../../components/navbar/Navbar";
import styles from "./DesktopHome.module.css";
import HomeProductCard from "../../components/homeproductcard/HomeProductCard";
const DesktopHome = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("targetSection");
    targetSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.desktophome}>
      <Footerdesktop />
      <HomePopular />
      <HomeTestimonial />
      <SectionBenefits />
      <HomeProducts id="targetSection" />
      <div className={styles.heading}>
        <img className={styles.bgImageIcon} alt="" src="/bgimage@2x.png" />
        <div className={styles.cardBg} />
        <button  className={styles.button}>
          <div  className={styles.button1}>Discovery our collection</div>
        </button>
        <div className={styles.descriptionParent}>
          <div
            className={styles.description}
          >{`All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments `}</div>
          <div className={styles.heroTitle}>
            <span className={styles.heroTitleTxt}>
              <p className={styles.p}>{`🌱 `}</p>
              <p className={styles.p}>The nature candle</p>
            </span>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default DesktopHome;
