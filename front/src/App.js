import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/screen/HomePage";
import Products from "./pages/ProductsPage/screen/ProductsPage";
import ProductDetail from "./pages/ProductsPage/screen/ProductDetail";
import Personal from "./pages/Personal/screen/Personal";
import Saved from "./pages/Saved/screen/Saved";
import Basket from "./pages/Basket/screen/Basket";
import PopUp from "./pages/PopUp/screen/PopUp";
import Order from "./pages/Order/screen/Order";
import Contacts from "./pages/Contacts/screen/Contacts";
import DiscountSystem from "./pages/DiscountSystem/screen/DiscountSystem";
import DeliveryPayment from "./pages/DeliveryPayment/screen/DeliveryPayment";
import About from "./pages/About/screen/AboutCo";
import TermsOfUse from "./pages/TermsOfUse/screen/TermsOfUse";
import FAQ from "./pages/FAQ/screen/FAQ";
import ReturnConditions from "./pages/ReturnConditions/screen/ReturnConditions";
import Error from "./pages/ErrorPage/screen/ErrorPage";
import LoginForm from "./components/Login/LoginForm";
import LoginPage from "./components/Login/LoginPage";
import SignupForm from "./components/Signup/SignupForm";
import SignupPage from "./components/Signup/SignupPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/actions/products";
import products from "./redux/reducers/products";
import { getAllCategories } from "./redux/actions/categories";
import { getProductsByCategory } from "./redux/actions/products";
import { getAllBrands, setBrands } from "./redux/actions/products";
import { getAllFilters, setFilterProducts } from "./redux/actions/filters";
import Categories from "./pages/ProductsPage/component/Categories";

function App() {
  const dispatch = useDispatch();
  // const state = useSelector(({ categories }) => {
  //   return {
  //     categories: categories.items,
  //     categoriesLoad: categories.isLoaded,
  //   };
  // });
  // const store = useSelector((store) => store);
  const DefaultContainer = () => (
    <div>
      <Route component={LoginForm} />
      <Route component={SignupForm} />
      <Route>
        <Navbar />
      </Route>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/reset-password" component={ResetPassword} />
        {/* Main Pages */}
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/personal" component={Personal} />
        {/* Products Pages */}
        <Route
          exact
          path="/products"
          element={<Redirect to="/products/clothes" />}
        />
        <Route
          exact
          path="/products/clothes"
          children={<Products title={"?????? ????????????"} index={11} />}
        />
        <Route
          exact
          path="/products/clothes/jackets"
          children={<Products title={"????????????"} index={0} />}
        />
        <Route
          exact
          path="/products/clothes/men-jackets"
          children={<Products title={"?????????????? ????????????"} index={0} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-jackets"
          children={<Products title={"?????????????? ????????????"} index={0} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-jackets"
          children={<Products title={"?????????????? ????????????"} index={0} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/vests"
          children={<Products title={"????????????"} index={1} />}
        />
        <Route
          exact
          path="/products/clothes/men-vests"
          children={<Products title={"?????????????? ????????????"} index={1} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-vests"
          children={<Products title={"?????????????? ????????????"} index={1} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-vests"
          children={<Products title={"?????????????? ????????????"} index={1} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/pants"
          children={<Products title={"??????????"} index={2} />}
        />
        <Route
          exact
          path="/products/clothes/men-pants"
          children={<Products title={"?????????????? ??????????"} index={2} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-pants"
          children={<Products title={"?????????????? ??????????"} index={2} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-pants"
          children={<Products title={"?????????????? ??????????"} index={2} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/tshirts"
          children={<Products title={"????????????????"} index={3} />}
        />
        <Route
          exact
          path="/products/clothes/men-tshirts"
          children={<Products title={"?????????????? ????????????????"} index={3} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-tshirts"
          children={<Products title={"?????????????? ????????????????"} index={3} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-tshirts"
          children={<Products title={"?????????????? ????????????????"} index={3} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/shirts"
          children={<Products title={"??????????????"} index={4} />}
        />
        <Route
          exact
          path="/products/clothes/men-shirts"
          children={<Products title={"?????????????? ??????????????"} index={4} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-shirts"
          children={<Products title={"?????????????? ??????????????"} index={4} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-shirts"
          children={<Products title={"?????????????? ??????????????"} index={4} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/shorts"
          children={<Products title={"??????????"} index={5} />}
        />
        <Route
          exact
          path="/products/clothes/men-shorts"
          children={<Products title={"?????????????? ??????????"} index={5} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-shorts"
          children={<Products title={"?????????????? ??????????"} index={5} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-shorts"
          children={<Products title={"?????????????? ??????????"} index={5} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/hoodies-sweaters"
          children={<Products title={"?????????????????? ?? ??????????????"} index={6} />}
        />
        <Route
          exact
          path="/products/clothes/men-hoodies-sweaters"
          children={
            <Products title={"?????????????? ?????????????????? ?? ??????????????"} index={6} sex={0} />
          }
        />
        <Route
          exact
          path="/products/clothes/women-hoodies-sweaters"
          children={
            <Products title={"?????????????? ?????????????????? ?? ??????????????"} index={6} sex={1} />
          }
        />
        <Route
          exact
          path="/products/clothes/baby-hoodies-sweaters"
          children={
            <Products title={"?????????????? ?????????????????? ?? ??????????????"} index={6} sex={2} />
          }
        />
        <Route
          exact
          path="/products/clothes/shoes"
          children={<Products title={"??????????"} index={7} />}
        />
        <Route
          exact
          path="/products/clothes/men-shoes"
          children={<Products title={"?????????????? ??????????"} index={7} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-shoes"
          children={<Products title={"?????????????? ??????????"} index={7} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-shoes"
          children={<Products title={"?????????????? ??????????"} index={7} sex={2} />}
        />
        <Route
          exact
          path="/products/equipment"
          children={<Products title={"????????????????????"} index={9} />}
        />
        <Route
          exact
          path="/products/accessories"
          children={<Products title={"????????????????????"} index={8} />}
        />
        <Route
          exact
          path="/products/run"
          children={<Products title={"??????"} index={10} />}
        />

        <Route exact path="/products/:id" children={<ProductDetail />} />
        <Redirect from="/clothes" to="/products/clothes" />
        <Redirect from="/products" to="/products/clothes" />
        {/* Additional Pages */}
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/discount-system" component={DiscountSystem} />
        <Route exact path="/delivery-payment" component={DeliveryPayment} />
        <Route exact path="/about" component={About} />
        <Route exact path="/terms-of-use" component={TermsOfUse} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/return-conditions" component={ReturnConditions} />
        {/* Error Page */}
        <Route path="/not-found">
          <Error
            title={"???????????? ???? ??????????????"}
            text={"???????????????????? ???????????????? ?????????????? ?????? ???????????????? ????????????????"}
          />
        </Route>
        <Redirect to="/not-found" />
      </Switch>

      <Route component={Footer} />
    </div>
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/popup/:id" component={PopUp} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
