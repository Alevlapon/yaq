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
          children={<Products title={"Все товары"} index={11} />}
        />
        <Route
          exact
          path="/products/clothes/jackets"
          children={<Products title={"Куртки"} index={0} />}
        />
        <Route
          exact
          path="/products/clothes/men-jackets"
          children={<Products title={"Мужские куртки"} index={0} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-jackets"
          children={<Products title={"Женские куртки"} index={0} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-jackets"
          children={<Products title={"Детские куртки"} index={0} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/vests"
          children={<Products title={"Жилеты"} index={1} />}
        />
        <Route
          exact
          path="/products/clothes/men-vests"
          children={<Products title={"Мужские жилеты"} index={1} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-vests"
          children={<Products title={"Женские жилеты"} index={1} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-vests"
          children={<Products title={"Детские жилеты"} index={1} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/pants"
          children={<Products title={"Брюки"} index={2} />}
        />
        <Route
          exact
          path="/products/clothes/men-pants"
          children={<Products title={"Мужские брюки"} index={2} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-pants"
          children={<Products title={"Женские брюки"} index={2} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-pants"
          children={<Products title={"Детские брюки"} index={2} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/tshirts"
          children={<Products title={"Футболки"} index={3} />}
        />
        <Route
          exact
          path="/products/clothes/men-tshirts"
          children={<Products title={"Мужские футболки"} index={3} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-tshirts"
          children={<Products title={"Женские футболки"} index={3} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-tshirts"
          children={<Products title={"Детские футболки"} index={3} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/shirts"
          children={<Products title={"Рубашки"} index={4} />}
        />
        <Route
          exact
          path="/products/clothes/men-shirts"
          children={<Products title={"Мужские рубашки"} index={4} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-shirts"
          children={<Products title={"Женские рубашки"} index={4} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-shirts"
          children={<Products title={"Детские рубашки"} index={4} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/shorts"
          children={<Products title={"Шорты"} index={5} />}
        />
        <Route
          exact
          path="/products/clothes/men-shorts"
          children={<Products title={"Мужские шорты"} index={5} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-shorts"
          children={<Products title={"Женские шорты"} index={5} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-shorts"
          children={<Products title={"Детские шорты"} index={5} sex={2} />}
        />
        <Route
          exact
          path="/products/clothes/hoodies-sweaters"
          children={<Products title={"Толстовки и свитера"} index={6} />}
        />
        <Route
          exact
          path="/products/clothes/men-hoodies-sweaters"
          children={
            <Products title={"Мужские толстовки и свитера"} index={6} sex={0} />
          }
        />
        <Route
          exact
          path="/products/clothes/women-hoodies-sweaters"
          children={
            <Products title={"Женские толстовки и свитера"} index={6} sex={1} />
          }
        />
        <Route
          exact
          path="/products/clothes/baby-hoodies-sweaters"
          children={
            <Products title={"Детские толстовки и свитера"} index={6} sex={2} />
          }
        />
        <Route
          exact
          path="/products/clothes/shoes"
          children={<Products title={"Обувь"} index={7} />}
        />
        <Route
          exact
          path="/products/clothes/men-shoes"
          children={<Products title={"Мужская обувь"} index={7} sex={0} />}
        />
        <Route
          exact
          path="/products/clothes/women-shoes"
          children={<Products title={"Женская обувь"} index={7} sex={1} />}
        />
        <Route
          exact
          path="/products/clothes/baby-shoes"
          children={<Products title={"Детская обувь"} index={7} sex={2} />}
        />
        <Route
          exact
          path="/products/equipment"
          children={<Products title={"Снаряжение"} index={9} />}
        />
        <Route
          exact
          path="/products/accessories"
          children={<Products title={"Аксессуары"} index={8} />}
        />
        <Route
          exact
          path="/products/run"
          children={<Products title={"Бег"} index={10} />}
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
            title={"НИЧЕГО НЕ НАЙДЕНО"}
            text={"Попробуйте сбросить фильтры или обновить страницу"}
          />
        </Route>
        <Redirect to="/not-found" />
      </Switch>

      <Route component={Footer} />
      {/* <PopUp id={21} /> */}
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
