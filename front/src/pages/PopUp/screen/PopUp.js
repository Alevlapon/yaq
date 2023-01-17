import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductModal from "../../../components/ProductModal";
import products from "../../../data/product_data";
import { getProductsByName } from "../../../redux/actions/products";
import { fetchOneProduct } from "../../../http/catalogAPI";

function PopUp({ active, setActive, id }) {
  const [singleProduct, setSingleProduct] = useState({});
  const dispatch = useDispatch();
  const state = useSelector(({ products }) => {
    return {
      products: products.items,
      productsLoad: products.isLoaded,
    };
  });

  const findProductBase = async () => {
    let product = await fetchOneProduct(id);
    setSingleProduct(product);
  };

  useEffect(() => {
    findProductBase();
  }, [id]);

  return (
    <Wrapper onClick={() => setActive(false)}>
      <div
        className={active ? "popup-container active" : "popup-container"}
        onClick={(e) => e.stopPropagation()}
      >
        <ProductModal product={singleProduct} setActive={setActive} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  background: #00000059;
  padding: 7.75% 13.125vw 9.84375%;
  left: 0;
  top: 60px;
  width: 100vw;
  height: 100vh;

  .popup-container {
    opacity: 0;
    height: 41.25vw;
    background: var(--clr-white);
    padding: 3.125vw 0 5.625vw;
  }

  .popup-container.active {
    transition: 2.5s;
    opacity: 1;
  }

  @media (max-width: 480px) {
    position: static;
    padding: 6.5625% 5.556vw 9.84375%;
    background: var(--clr-primary-6);

    .popup-container {
      height: 100%;
      background: transparent;
    }
  }
`;

export default PopUp;
