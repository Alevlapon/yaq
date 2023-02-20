import React, { useEffect } from "react";
import styled from "styled-components";
import { CartState } from "../context/Context";
import { getBasket, addToBasket } from "../redux/actions/basket";
import { useDispatch, useSelector } from "react-redux";

function AddButton({ product, color, size, bool, setActive }) {
  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();
  // const state = useSelector(({ basket }) => {
  //   return {
  //     basket: basket.items,
  //   };
  // });
  const dispatch = useDispatch();

  if (product) {
    product.color = color;
    product.size = size;
  }
  // if (product.inSale) {
  //   let salePrice = (product?.price / 100) * (100 - Number(product?.inSale));
  //   product.price = salePrice;
  // }

  const addtoCart = () => {
    dispatch(addToBasket(product));
    if (setActive) {
      setActive(false);
    }
  };

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  return (
    <Wrapper>
      {/* <Link> */}
      <button className="button" onClick={() => addtoCart()} disabled={bool}>
        В корзину
      </button>
      {/* </Link> */}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .button {
    width: 17.5rem;
    height: 3.75rem;
    font-size: 22px;
    font-weight: 500;
    color: var(--clr-white);
    background: var(--clr-primary-1);
    border: none;
  }
`;

export default AddButton;
