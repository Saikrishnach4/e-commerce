import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopHome from "./pages/home/DesktopHome";
import DesktopAuthentication from "./pages/auth/DesktopAuthentication"
import DesktopPayment from "./pages/payment/DesktopPayment"
import DesktopShipping from "./pages/shipping/DesktopShipping"
import DesktopThanks from "./pages/thanks/DesktopThanks"
import DesktopCart from "./pages/cart/DesktopCart"
import DesktopProduct from "./pages/product/DesktopProduct"
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopHome />} />
      <Route path="/auth" element={<DesktopAuthentication />} />
      <Route path="/payment" element={<DesktopPayment />} />
      <Route path="/shipping" element={<DesktopShipping />} />
      <Route path="/thanks" element={<DesktopThanks />} />
      <Route path="/cart" element={<DesktopCart />} />
      <Route path="/product" element={<DesktopProduct/>} />
      
    </Routes>
  );
}
export default App;
