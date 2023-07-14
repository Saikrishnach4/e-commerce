import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./DesktopProduct.module.css";
import { useLocation, useParams,useHistory,useNavigate } from 'react-router-dom';
import { useState } from "react";
const DesktopProduct = ({ }) => {
  const navigate = useNavigate();

  // Rest of your code...

  const handleAddToCart = () => {
    // Perform any necessary actions before navigating to the cart
    // For example, you can add the selected product to the cart state

    // Navigate to the cart page
    navigate('/cart', { state: { quantity } });
  };
  const location = useLocation();
  const { index, name, price, image } = location.state;
  const modifiedName = name +" "+"Candleaf®"
  const [selectedWeeks, setSelectedWeeks] = useState("");
  

  const [showContent, setShowContent] = useState(false);

  const handleSeeDetailsClick = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };
  const handleChange = (event) => {
    setSelectedWeeks(event.target.value);
  };
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className={styles.desktopproduct}>
      <div className={styles.description}>
        <p className={styles.allHandMadeWithNaturalSoy}>
          <span className={styles.span}>
            <span>
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments. 
            </span>
          </span>
        </p>
        <p className={styles.freeShipping}>
          <span className={styles.span}>
            <span>
              <span>{`🚚 `}</span>
            </span>
          </span>
          <span>
            <b className={styles.freeShipping1}>FREE SHIPPING</b>
          </span>
        </p>
      </div>
      <div className={styles.details}>
        <div className={styles.bg} />
        <div className={styles.weight}>
          <span>{`Weight: `}</span>
          <span className={styles.g}>{`400g `}</span>
        </div>
        <div className={styles.dimension}>
          <span>Dimension:</span>
          <span className={styles.g}>{` 10cm x 5cm `}</span>
        </div>
        <div className={styles.burningTime}>
          <span>{`Burning Time: `}</span>
          <span className={styles.g}>70-75 hours</span>
        </div>
        <div className={styles.fragrance}>
          <span>{`Fragrance: `}</span>
          <span
            className={styles.g}
          >{`Premium quality ingredients with natural essential oils `}</span>
        </div>
        <div className={styles.wax}>
          <span>{`Wax: `}</span>
          <span className={styles.g}>
            Top grade Soy wax that delivers a smoke less, consistent burn
          </span>
        </div>
      </div>
      <button className={styles.bigButton} onClick={handleAddToCart}>
        <div className={styles.button} />
        <div className={styles.label}>
          <img className={styles.cartIcon} alt="" src="/cart.svg" />
          <div className={styles.bigButton1}>+ Add to cart</div>
        </div>
      </button>
      <div className={styles.quantity}>
      <div className={styles.quantity1}>
        <div className={styles.input}>
          <div className={styles.bg1} />
          <div className={styles.placeholder}>
            <span onClick={handleIncrease}>+</span>
            <span className={styles.span1}>{`   ${quantity}   `}</span>
            <span className={styles.span2} onClick={handleDecrease}>-</span>
          </div>
        </div>
        <div className={styles.description1}>Quantity</div>
      </div>
    </div>
      <div className={styles.price}>{price}</div>
      <div className={styles.image}>
        <div className={styles.bg2} />
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.productName}>{modifiedName}</div>
      <Footer/>
      <div className={styles.subscription}>
        <div className={styles.subscription1}>
          <div className={styles.dropDownParent}>
            <button className={styles.dropDown}>
              <div className={styles.bgParent}>
                <div className={styles.bg3} />
                <div className={styles.description2}>
      <span className={styles.subscribeNowAndGetThe10}>
        <span className={styles.subscribeNowAnd}>
          Subscribe now and get 10% off on every recurring order.{" "}
          {!showContent ? (
            <span className={styles.seeDetails} onClick={handleSeeDetailsClick}>
              See details
            </span>
          ) : (
            <>
              This is the additional content that is shown when "See details" is clicked.{" "}
              <span className={styles.seeDetails} onClick={handleSeeDetailsClick}>
                Hide details
              </span>
            </>
          )}
        </span>
        <span className={styles.span3}>{` `}</span>
      </span>
    </div>
              </div>
              {/* <img
          className={styles.chevrondownIcon}
          alt=""
          src="/chevrondown.svg"
          style={{ visibility: selectedWeeks ? "hidden" : "visible" }}
        /> */}
             <div className={styles.dropdown}>
      <select value={selectedWeeks} onChange={handleChange}>
        <option value="">weeks</option>
        <option value="1">1 week</option>
        <option value="2">2 weeks</option>
        <option value="3">3 weeks</option>
      </select>
      {/* <div className={styles.label1}>{selectedWeeks && `${selectedWeeks} weeks`}</div> */}
    </div>
              <div  />
            </button>
            <div
              className={styles.subscribe}
            >{`Subscribe and delivery every `}</div>
            <input className={styles.frameChild} type="radio" />
          </div>
          <div className={styles.oneTime}>
            <div className={styles.label2}>One time purchase</div>
            <input className={styles.roundCheckbox} type="radio" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default DesktopProduct;
