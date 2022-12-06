import { createContext, useContext, useReducer, useEffect } from "react";
// import productData from "../data/product_data";
import { cartReducer } from "./Reducers";
import { UserState } from "./UserContext";
import { fetchAllProducts } from "../http/catalogAPI";

const getLocalStorageCart = () => {
  let cart = localStorage.getItem("cart-items");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart-items"));
  } else {
    return [];
  }
};
const getLocalStorageSaved = () => {
  let saved = localStorage.getItem("saved-items");
  if (saved) {
    return JSON.parse(localStorage.getItem("saved-items"));
  } else {
    return [];
  }
};

const Cart = createContext();

function Context({ children }) {
  const { user, setUser, users, setUsers } = UserState();
  // const { rows } = fetchAllProducts();
  // console.log(rows);
  // const productData = rows;
  // const products = productData?.map((product, index) => ({
  //   id: productData[index].id,
  //   name: productData[index].name,
  //   price: productData[index].price,
  // currency: productData[index].currency,
  // image: productData[index].image,
  // images: productData[index].images,
  // sale: productData[index].sale,
  // brands: productData[index].brands,
  // material: productData[index].material,
  // characteristic1: productData[index].characteristic1,
  // characteristic2: productData[index].characteristic2,
  // saved: productData[index].saved,
  // type: productData[index].type,
  // category: productData[index].category,
  // item: productData[index].item,
  // gender: productData[index].gender,
  // colors: productData[index].colors,
  // color: productData[index].color,
  // sizes: productData[index].sizes,
  // size: productData[index].size,
  // }));

  const [state, dispatch] = useReducer(cartReducer, {
    // products: products,
    cart: getLocalStorageCart(),
    saved: user?.auth ? user.saved : [],
    saved: getLocalStorageSaved(),
  });

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(state.cart));
    localStorage.setItem("saved-items", JSON.stringify(state.saved));
    let saved = JSON.parse(localStorage.getItem("saved-items"));
    setUser((item) => ({
      ...item,
      saved: saved,
    }));
    if (user.auth === true) {
      const currentUser = users.find((element) => element.email === user.email);
      const currentUsers = users;
      for (var i = 0; i < users.length; i++) {
        currentUsers[i] = users[i];
        if (currentUser.id === users[i].id) {
          currentUsers[i].saved = saved;
        }
      }
      setUsers(currentUsers);
    }
  }, [state.cart, state.saved]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
